export default {
    props: {
        title: {
            default: 'title',
        },
        showObject: {},
        data:{
            rangetext:['15', '20', '25'],
            textvalue:'Select text',
            valueChoose:''
        }
    },
    data() {
        return {
            showObj: this.showObject,
            rangetext:['15', '20', '25'],
            textvalue:'Select text',
            valueChoose:''
        };
    },
    childClicked () {
        this.$emit('eventType1', {text: '收到子组件参数'});
        this.showObj = !this.showObj;
    },
    onChange(e){
        this.data.valueChoose=e.newValue;
        this.$emit('eventType1',{selecttext:this.data.valueChoose});
    }
}
