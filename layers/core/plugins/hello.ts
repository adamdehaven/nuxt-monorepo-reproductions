export default defineNuxtPlugin({
  name: 'hello',
  setup () {
    return {
      provide: {
        hello: (msg: string) => `Hello ${msg}!`
      }
    }
  }
})
