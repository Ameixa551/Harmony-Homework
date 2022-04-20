import prompt from '@system.prompt';

// 定义常量 0-Ability、1-Internal Ability
const ABILITY_TYPE_EXTERNAL = 0;
const ABILITY_TYPE_INTERNAL = 1;

// 接口调用同步或者异步
const ACTION_SYNC = 0;
const ACTION_ASYNC = 1;

const ACTION_MESSAGE_CODE_CALCULATE = 1001;//计算
const SUCCESS = 0;

export default {
    data: {
        title: "",
        oneNumber:0,
        secondNumber:0
    },
    onInit() {
        this.title = this.$t('strings.world');
    },
    oneNumberChange(e){
        this.oneNumber = e.value;
    },
    secondNumberChange(e){
        this.secondNumber = e.value;
    },
    //计算加和
    CalculateCount:async function(){
        var actionData = {};
        actionData.oneNumber = this.oneNumber;
        actionData.secondNumber = this.secondNumber;
        //调用PA
        var action = {}

        action.bundleName = 'com.example.facallpa';
        //在JAVA中创建的PA
        action.abilityName = 'com.example.facallpa.ComputeServiceAbility';
        action.messageCode = ACTION_MESSAGE_CODE_CALCULATE;
        action.data = actionData;
        action.abilityType = ABILITY_TYPE_INTERNAL;
        action.syncOption = ACTION_SYNC;

        var resulteData = await FeatureAbility.callAbility(action);

        //解析返回的结果
        var result  = JSON.parse(resulteData);
        if(result.code == SUCCESS){
            prompt.showToast({
                message:result.abilityResult,
                duration:1000
            });
        }
    }
}
