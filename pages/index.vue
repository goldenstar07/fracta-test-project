<template>
  <div>
    <v-row>
      <v-col class='buttonGroup'>
        <v-btn
          color=primary
          @click.native="setColorByType('year')"
        >
          Year
        </v-btn>
      </v-col>
      <v-col class='buttonGroup'>
        <v-btn
          color=primary
          @click.native="setColorByType('diameter')"
        >
          Diameter
        </v-btn>
      </v-col>
      <v-col class='buttonGroup'>
        <v-btn
          color=primary
          @click.native="setColorByType('material_type_code')"
        >
          Material
        </v-btn>
      </v-col>
      <v-col class='buttonGroup'>
        <v-btn
          color=primary
          @click.native="addRandom()"
        >
          Random PipeYear
        </v-btn>
      </v-col>
    </v-row>
    <div id="map"></div>
  </div>
</template>

<script>
import clonedeep from 'lodash.clonedeep'

import pipesData from '../constants/pipes.json'
import { defaultMapbox } from '../constants/mapbox'

export default {
  data() {
    return {
      type: 'init',
      srcName: 'main',
      layerName: 'main',
      geoJsonData: {},
    }
  },

  created() {
    this.$mapboxRender.$on('load', () => {
      this.geoJsonData = clonedeep(pipesData)
      this.drawData()
      this.setColorByType('year')
    })
  },

  mounted() {
    this.$mapbox.setup()
  },

  methods: {
    drawData() {
      this.$mapbox.addSource(this.srcName, 'geojson', this.geoJsonData),
      this.$mapbox.addLayer(
        this.layerName,
        this.srcName,
        'line',
        {
            'line-join': 'round',
            'line-cap': 'round'
        }
      )
    },

    reset() {
      this.geoJsonData = clonedeep(pipesData)
      this.$mapbox.setData(this.srcName, this.geoJsonData)
    },

    setColorByType(newType, keepSource = false) {
      if(this.type === newType && !keepSource) return
      if (!keepSource) {
        this.reset()
      }

      this.$mapbox.setPaintProperty(this.layerName, 'line-color', defaultMapbox[newType])
      this.$mapbox.setPaintProperty(this.layerName, 'line-width', 4)
      this.type = newType
    },

    addRandom(){
      const index = this.getRandom(0, pipesData.features.length)
      this.geoJsonData = clonedeep(pipesData)
      this.geoJsonData.features[index].properties.year = this.getRandom(1960, 2000)
      this.$mapbox.setData(this.srcName, this.geoJsonData)
      this.setColorByType('year', true)
    },

    getRandom(min = 0, max) {
      return min + Math.floor(Math.random() * (max - min));
    },
  },
}
</script>

<style scoped>
  #map{
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100vh;
    z-index: 0;
  }

  .buttonGroup {
    z-index: 1;

  }
</style>