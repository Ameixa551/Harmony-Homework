package com.example.getbatteryinfo.slice;

import com.example.getbatteryinfo.MyRemote;
import com.example.getbatteryinfo.ResourceTable;
import ohos.aafwk.ability.AbilitySlice;
import ohos.aafwk.ability.IAbilityConnection;
import ohos.aafwk.content.Intent;
import ohos.aafwk.content.Operation;
import ohos.agp.components.Button;
import ohos.agp.components.Component;
import ohos.agp.components.Text;
import ohos.bundle.ElementName;
import ohos.hiviewdfx.HiLog;
import ohos.hiviewdfx.HiLogLabel;
import ohos.rpc.IRemoteObject;

public class MainAbilitySlice extends AbilitySlice {
    private static final String TAG = MainAbilitySlice.class.getSimpleName();
    private static final HiLogLabel LABEL_LOG = new HiLogLabel(3, 0xD000F00, TAG);
    @Override
    public void onStart(Intent intent) {
        super.onStart(intent);
        super.setUIContent(ResourceTable.Layout_ability_main);
        Button btn_battery=(Button) findComponentById(ResourceTable.Id_btn_battery);
        btn_battery.setClickedListener(listener->startBatteryService());
    }

    @Override
    public void onActive() {
        super.onActive();
    }

    @Override
    public void onForeground(Intent intent) {
        super.onForeground(intent);
    }

    private void startBatteryService(){
        Operation operation = new Intent.OperationBuilder().withDeviceId("")
                .withBundleName("com.example.getbatteryinfo")
                .withAbilityName("com.example.getbatteryinfo.ServiceAbility")
                .build();
        Intent intent = new Intent();
        intent.setOperation(operation);
        connectAbility(intent,connection);
    }

    private IAbilityConnection connection = new IAbilityConnection() {
        @Override
        public void onAbilityConnectDone(ElementName elementName, IRemoteObject iRemoteObject, int i) {
            HiLog.info(LABEL_LOG,"%{public}s","onAbilityConnectDone  resultCode:"+i);
            MyRemote clientRemote=(MyRemote) iRemoteObject;
            Text text=(Text)findComponentById(ResourceTable.Id_text_helloworld);
            text.setText(clientRemote.battery);
        }

        @Override
        public void onAbilityDisconnectDone(ElementName elementName, int i) {

        }
    };
}
