export let task = async (callback) => {
    await new Promise(x => setTimeout(callback,0))
}