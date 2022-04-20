//export default {
//    data: {
//        title: ""
//    },
//    onInit() {
//        this.title = this.$t('strings.world');
//    }
//}
export default {
    data: {
        text: '开始',
        isShow: false,
        selecttext:'null'
    },
    textClicked (e) {
        this.text = e.detail.text;
    },
}