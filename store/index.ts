import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
  state: () => ({
    environments: {
        dev: 'http://localhost:3001',
        prod: 'https://patrickchartrand.vercel.app'
    },
    website: ''
  }),
  actions: {
    getDomain() {
        const url = useRequestURL()

        if (url.hostname.includes('localhost')) {
            this.website = this.environments.dev
        } else {
            this.website = this.environments.prod
        }
    }
  },
})