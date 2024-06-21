import { g as useNuxtApp } from './server.mjs';

const useOrderService = () => {
  const { $axios } = useNuxtApp();
  return {
    getMyOrders(params) {
      params = {
        page: 1,
        per_page: 10,
        ...params
      };
      Object.keys(params).forEach((key) => {
        if (params[key] === null || params[key] === "" || params[key] === void 0) {
          delete params[key];
        }
      });
      return $axios.get("/my/orders", { params });
    },
    getDetailOrder(id) {
      return $axios.get(`/orders/${id}`);
    },
    setMyOrder(data) {
      return $axios.post("/my/orders", data);
    },
    getMyMerchantOrders(params) {
      params = {
        page: 1,
        per_page: 10,
        ...params
      };
      Object.keys(params).forEach((key) => {
        if (params[key] === null || params[key] === "" || params[key] === void 0) {
          delete params[key];
        }
      });
      return $axios.get("/my/merchant/orders", { params });
    },
    getAllOrders(params) {
      params = {
        page: 1,
        per_page: 10,
        ...params
      };
      Object.keys(params).forEach((key) => {
        if (params[key] === null || params[key] === "" || params[key] === void 0) {
          delete params[key];
        }
      });
      return $axios.get("/orders", { params });
    },
    updateClientOrderStatus(id, data) {
      const payload = {
        order_status: data
      };
      return $axios.put(`/orders/${id}/client-status`, payload);
    }
  };
};

export { useOrderService as u };
//# sourceMappingURL=useOrderService-BhEQC7Tw.mjs.map
