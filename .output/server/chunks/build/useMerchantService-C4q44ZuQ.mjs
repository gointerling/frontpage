import { g as useNuxtApp } from './server.mjs';

const useMerchantService = () => {
  const { $axios } = useNuxtApp();
  return {
    getMerchants(params) {
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
      return $axios.get("/users-merchants", { params });
    },
    getMerchantDetails(id) {
      return $axios.get(`/users-merchants/${id}`);
    },
    updateMerchant(id, data) {
      return $axios.put(`/users-merchants/${id}`, data);
    },
    updateMerchantStatus(id, status) {
      const data = {
        status
      };
      return $axios.put(`/users-merchants/${id}/status`, data);
    },
    // Personalized Merchant Service
    getMyMerchants() {
      return $axios.get("/my/merchant");
    },
    updateMyMerchant(data) {
      return $axios.put(`/my/merchant`, data);
    },
    setupMyMerchantService(data) {
      return $axios.post("/services", data);
    }
  };
};

export { useMerchantService as u };
//# sourceMappingURL=useMerchantService-C4q44ZuQ.mjs.map
