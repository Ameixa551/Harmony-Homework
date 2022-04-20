package com.example.facallpa;

import ohos.ace.ability.AceAbility;
import ohos.aafwk.content.Intent;

public class MainAbility extends AceAbility {
    @Override
    public void onStart(Intent intent) {
        ComputeServiceAbility.register(this);
        super.onStart(intent);
    }

    @Override
    public void onStop() {
        ComputeServiceAbility.unregister();
        super.onStop();
    }
}
