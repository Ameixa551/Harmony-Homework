package com.example.getbatteryinfo;

import ohos.aafwk.ability.Ability;
import ohos.aafwk.content.Intent;
import ohos.batterymanager.BatteryInfo;
import ohos.rpc.IRemoteObject;
import ohos.hiviewdfx.HiLog;
import ohos.hiviewdfx.HiLogLabel;

public class ServiceAbility extends Ability {
    private static final HiLogLabel LABEL_LOG = new HiLogLabel(3, 0xD001100, "Demo");

    @Override
    public void onStart(Intent intent) {
        HiLog.error(LABEL_LOG, "ServiceAbility::onStart");
        super.onStart(intent);
    }

    @Override
    public void onBackground() {
        super.onBackground();
        HiLog.info(LABEL_LOG, "ServiceAbility::onBackground");
    }

    @Override
    public void onStop() {
        super.onStop();
        HiLog.info(LABEL_LOG, "ServiceAbility::onStop");
    }

    @Override
    public void onCommand(Intent intent, boolean restart, int startId) {
    }

    @Override
    public IRemoteObject onConnect(Intent intent) {
        MyRemote thisRemote=new MyRemote();
        thisRemote.battery=getBatteryInfo();
        return thisRemote;
    }

    @Override
    public void onDisconnect(Intent intent) {
    }

    private String getBatteryInfo(){
        BatteryInfo batteryInfo = new BatteryInfo();
        StringBuilder stringBuilder = new StringBuilder();
        BatteryInfo.BatteryChargeState batteryChargeState = batteryInfo.getChargingStatus();
        double bl = batteryInfo.getCapacity();
        boolean isCharging = batteryChargeState==BatteryInfo.BatteryChargeState.ENABLE
                ||batteryChargeState ==BatteryInfo.BatteryChargeState.FULL;
        stringBuilder
                .append("电量还剩")
                .append(bl+"%,"/*+System.lineSeparator()*/)
                .append("正在充电：").append(isCharging);
        return stringBuilder.toString();
    }
}