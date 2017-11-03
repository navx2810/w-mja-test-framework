new Vue({
    el: "#app",
    components: {
        "test-info": TestInfo
    },
    data: {
        info: {
            id: null,
            lastRun: null,
            results: null
        },
        status: null,
        report: []
    }
})

var TestInfo = {
    template: "#t-test-info",
    props: ['info'],
    computed: {
        hasID: function() { return this.info ? this.info.id : this.info },
        hasLastRun: function() { return this.info ? this.info.lastRun : this.info },
        hasResults: function() { return this.info ? this.info.results : this.info }
    }
}