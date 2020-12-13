import Vue from "vue";
import MapboxGL from "mapbox-gl";

export default ({ app }, inject) => {
  inject("mapboxRender", new Vue());

  const mapboxFunc = {
    setup() {
      MapboxGL.accessToken = process.env.MAP_TOKEN;

      this.mapbox = new MapboxGL.Map({
        container: "map",
        style: "mapbox://styles/mapbox/light-v10",
        center: [-122.271408, 37.558588],
        zoom: 12
      });

      this.mapbox.on("load", e => {
        app.$mapboxRender.$emit("load", e);
      });

      return this;
    },

    getSource(name) {
      return typeof this.mapbox.getSource(name) !== "undefined";
    },

    setData(source, data) {
      if (this.getSource(source)) {
        this.mapbox.getSource(source).setData(data);
      }
    },

    getLayer(name) {
      return typeof this.mapbox.getLayer(name) !== "undefined";
    },

    addSource(name, type, data) {
      if (!this.mapbox.getSource(name)) {
        this.mapbox.addSource(name, {
          type: type,
          data: data
        });
      }

      return this;
    },

    addLayer(id, source, type, layout, paint) {
      if (!this.mapbox.getLayer(id)) {
        this.mapbox.addLayer({
          id: id,
          source: source,
          type: type,
          layout: layout,
          paint: paint || {}
        });
      }

      return this;
    },

    setPaintProperty(id, property, value) {
      if (this.mapbox.getLayer(id)) {
        this.mapbox.setPaintProperty(id, property, value);
      }
    }
  };

  inject("mapbox", mapboxFunc);
};
