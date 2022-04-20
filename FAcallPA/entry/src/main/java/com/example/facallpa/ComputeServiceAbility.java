package com.example.facallpa;

import com.example.facallpa.RequestData;
import ohos.ace.ability.AceInternalAbility;
import ohos.app.AbilityContext;
import ohos.hiviewdfx.HiLog;
import ohos.hiviewdfx.HiLogLabel;
import ohos.rpc.IRemoteObject;
import ohos.rpc.MessageOption;
import ohos.rpc.MessageParcel;
import ohos.rpc.RemoteException;
import ohos.utils.zson.ZSONObject;

import java.util.HashMap;
import java.util.Map;

public class ComputeServiceAbility extends AceInternalAbility implements AceInternalAbility.AceInternalAbilityHandler {
    private static final HiLogLabel LABEL = new HiLogLabel(HiLog.LOG_APP,0,"app_tag");
    private static final String BUNDLE_NAME = "com.example.facallpa";
    private static final String ABILITY_NAME = "com.example.facallpa.ComputeServiceAbility";
    //返回JS的结果码
    private static final int SUCCESS = 0;
    private static final int ERROR = 1;
    //与JS约定的业务码
    private static final int CALCULATE = 1001;

    private static ComputeServiceAbility mInstance;
    private AbilityContext mContext;

    public ComputeServiceAbility() {
        super(BUNDLE_NAME,ABILITY_NAME);
    }

    public static void register(AbilityContext context){
        mInstance = new ComputeServiceAbility();
        mInstance.mContext = context;
        mInstance.setInternalAbilityHandler(mInstance);
    }

    public static void unregister() {
        if (mInstance == null) {
            return;
        }
        mInstance.mContext = null;
        mInstance.setInternalAbilityHandler(null);
    }

    @Override
    public boolean onRemoteRequest(int code, MessageParcel data, MessageParcel reply, MessageOption messageOption){
        HiLog.info(LABEL,"code:"+code);
        switch (code){
            case CALCULATE:{
                //执行计算
                String dataStr = data.readString();
                HiLog.info(LABEL,"datastr:"+dataStr);
                RequestData requestData = new RequestData();
                requestData = ZSONObject.stringToClass(dataStr,RequestData.class);
                int count = requestData.getOneNumber()+requestData.getSecondNumber();
                Map<String,Object>result = new HashMap<>();
                result.put("code",SUCCESS);//返回结果码
                result.put("abilityResult",count);
                //同步返回
                if(messageOption.getFlags() == MessageOption.TF_SYNC){
                    reply.writeString(ZSONObject.toZSONString(result));
                }else{
                    // 异步返回
                    MessageParcel responseData = MessageParcel.obtain();
                    responseData.writeString(ZSONObject.toZSONString(result));
                    IRemoteObject remoteObject = reply.readRemoteObject();
                    try {
                        remoteObject.sendRequest(0, responseData, MessageParcel.obtain(), new MessageOption());
                    } catch (RemoteException e) {
                        HiLog.error(LABEL, "error:" +  e.getMessage());
                        return false;
                    } finally {
                        responseData.reclaim();
                    }
                }
                break;
            }
            default:
                Map<String, Object> result = new HashMap<>();
                result.put("code", ERROR);// 返回结果码
                reply.writeString(ZSONObject.toZSONString(result));
                return false;
        }
        return true;
    }
}
