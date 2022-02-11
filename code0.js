gdjs.ConnectCode = {};
gdjs.ConnectCode.GDConnectButtonObjects1_1final = [];

gdjs.ConnectCode.GDbackgroudObjects1= [];
gdjs.ConnectCode.GDbackgroudObjects2= [];
gdjs.ConnectCode.GDbackgroudObjects3= [];
gdjs.ConnectCode.GDidTextObjects1= [];
gdjs.ConnectCode.GDidTextObjects2= [];
gdjs.ConnectCode.GDidTextObjects3= [];
gdjs.ConnectCode.GDidEntryObjects1= [];
gdjs.ConnectCode.GDidEntryObjects2= [];
gdjs.ConnectCode.GDidEntryObjects3= [];
gdjs.ConnectCode.GDidEntryTextObjects1= [];
gdjs.ConnectCode.GDidEntryTextObjects2= [];
gdjs.ConnectCode.GDidEntryTextObjects3= [];
gdjs.ConnectCode.GDidEntrySpriteObjects1= [];
gdjs.ConnectCode.GDidEntrySpriteObjects2= [];
gdjs.ConnectCode.GDidEntrySpriteObjects3= [];
gdjs.ConnectCode.GDConnectButtonObjects1= [];
gdjs.ConnectCode.GDConnectButtonObjects2= [];
gdjs.ConnectCode.GDConnectButtonObjects3= [];
gdjs.ConnectCode.GDCopyObjects1= [];
gdjs.ConnectCode.GDCopyObjects2= [];
gdjs.ConnectCode.GDCopyObjects3= [];
gdjs.ConnectCode.GDPasteObjects1= [];
gdjs.ConnectCode.GDPasteObjects2= [];
gdjs.ConnectCode.GDPasteObjects3= [];
gdjs.ConnectCode.GDConnectTextObjects1= [];
gdjs.ConnectCode.GDConnectTextObjects2= [];
gdjs.ConnectCode.GDConnectTextObjects3= [];
gdjs.ConnectCode.GDCopyTextObjects1= [];
gdjs.ConnectCode.GDCopyTextObjects2= [];
gdjs.ConnectCode.GDCopyTextObjects3= [];
gdjs.ConnectCode.GDPasteTextObjects1= [];
gdjs.ConnectCode.GDPasteTextObjects2= [];
gdjs.ConnectCode.GDPasteTextObjects3= [];
gdjs.ConnectCode.GDErrorTextObjects1= [];
gdjs.ConnectCode.GDErrorTextObjects2= [];
gdjs.ConnectCode.GDErrorTextObjects3= [];
gdjs.ConnectCode.GDidbackgroundObjects1= [];
gdjs.ConnectCode.GDidbackgroundObjects2= [];
gdjs.ConnectCode.GDidbackgroundObjects3= [];
gdjs.ConnectCode.GDSingleObjects1= [];
gdjs.ConnectCode.GDSingleObjects2= [];
gdjs.ConnectCode.GDSingleObjects3= [];
gdjs.ConnectCode.GDSingleTextObjects1= [];
gdjs.ConnectCode.GDSingleTextObjects2= [];
gdjs.ConnectCode.GDSingleTextObjects3= [];

gdjs.ConnectCode.conditionTrue_0 = {val:false};
gdjs.ConnectCode.condition0IsTrue_0 = {val:false};
gdjs.ConnectCode.condition1IsTrue_0 = {val:false};
gdjs.ConnectCode.condition2IsTrue_0 = {val:false};
gdjs.ConnectCode.conditionTrue_1 = {val:false};
gdjs.ConnectCode.condition0IsTrue_1 = {val:false};
gdjs.ConnectCode.condition1IsTrue_1 = {val:false};
gdjs.ConnectCode.condition2IsTrue_1 = {val:false};
gdjs.ConnectCode.conditionTrue_2 = {val:false};
gdjs.ConnectCode.condition0IsTrue_2 = {val:false};
gdjs.ConnectCode.condition1IsTrue_2 = {val:false};
gdjs.ConnectCode.condition2IsTrue_2 = {val:false};


gdjs.ConnectCode.mapOfGDgdjs_46ConnectCode_46GDConnectButtonObjects2Objects = Hashtable.newFrom({"ConnectButton": gdjs.ConnectCode.GDConnectButtonObjects2});gdjs.ConnectCode.eventsList0 = function(runtimeScene) {

{


gdjs.ConnectCode.condition0IsTrue_0.val = false;
{
gdjs.ConnectCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.ConnectCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ErrorText"), gdjs.ConnectCode.GDErrorTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("idEntryText"), gdjs.ConnectCode.GDidEntryTextObjects2);
{for(var i = 0, len = gdjs.ConnectCode.GDErrorTextObjects2.length ;i < len;++i) {
    gdjs.ConnectCode.GDErrorTextObjects2[i].setString("");
}
}{for(var i = 0, len = gdjs.ConnectCode.GDidEntryTextObjects2.length ;i < len;++i) {
    gdjs.ConnectCode.GDidEntryTextObjects2[i].setString("");
}
}}

}


{



}


{



}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("idEntry"), gdjs.ConnectCode.GDidEntryObjects2);
gdjs.copyArray(runtimeScene.getObjects("idEntryText"), gdjs.ConnectCode.GDidEntryTextObjects2);
{for(var i = 0, len = gdjs.ConnectCode.GDidEntryTextObjects2.length ;i < len;++i) {
    gdjs.ConnectCode.GDidEntryTextObjects2[i].setString((( gdjs.ConnectCode.GDidEntryObjects2.length === 0 ) ? "" :gdjs.ConnectCode.GDidEntryObjects2[0].getString()));
}
}}

}


{


gdjs.ConnectCode.condition0IsTrue_0.val = false;
gdjs.ConnectCode.condition1IsTrue_0.val = false;
{
gdjs.ConnectCode.condition0IsTrue_0.val = gdjs.evtTools.p2p.isReady();
}if ( gdjs.ConnectCode.condition0IsTrue_0.val ) {
{
{gdjs.ConnectCode.conditionTrue_1 = gdjs.ConnectCode.condition1IsTrue_0;
gdjs.ConnectCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8465884);
}
}}
if (gdjs.ConnectCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("idText"), gdjs.ConnectCode.GDidTextObjects2);
{for(var i = 0, len = gdjs.ConnectCode.GDidTextObjects2.length ;i < len;++i) {
    gdjs.ConnectCode.GDidTextObjects2[i].setString(gdjs.evtTools.p2p.getCurrentId());
}
}}

}


{


gdjs.ConnectCode.condition0IsTrue_0.val = false;
gdjs.ConnectCode.condition1IsTrue_0.val = false;
{
gdjs.ConnectCode.condition0IsTrue_0.val = !(gdjs.evtTools.p2p.isReady());
}if ( gdjs.ConnectCode.condition0IsTrue_0.val ) {
{
{gdjs.ConnectCode.conditionTrue_1 = gdjs.ConnectCode.condition1IsTrue_0;
gdjs.ConnectCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8466732);
}
}}
if (gdjs.ConnectCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("idText"), gdjs.ConnectCode.GDidTextObjects2);
{for(var i = 0, len = gdjs.ConnectCode.GDidTextObjects2.length ;i < len;++i) {
    gdjs.ConnectCode.GDidTextObjects2[i].setString("Connecting to server...");
}
}}

}


{



}


{

gdjs.ConnectCode.GDConnectButtonObjects1.length = 0;


gdjs.ConnectCode.condition0IsTrue_0.val = false;
gdjs.ConnectCode.condition1IsTrue_0.val = false;
{
{gdjs.ConnectCode.conditionTrue_1 = gdjs.ConnectCode.condition0IsTrue_0;
gdjs.ConnectCode.GDConnectButtonObjects1_1final.length = 0;gdjs.ConnectCode.condition0IsTrue_1.val = false;
gdjs.ConnectCode.condition1IsTrue_1.val = false;
{
gdjs.ConnectCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
if( gdjs.ConnectCode.condition0IsTrue_1.val ) {
    gdjs.ConnectCode.conditionTrue_1.val = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("ConnectButton"), gdjs.ConnectCode.GDConnectButtonObjects2);
{gdjs.ConnectCode.conditionTrue_2 = gdjs.ConnectCode.condition1IsTrue_1;
gdjs.ConnectCode.condition0IsTrue_2.val = false;
gdjs.ConnectCode.condition1IsTrue_2.val = false;
{
gdjs.ConnectCode.condition0IsTrue_2.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.ConnectCode.condition0IsTrue_2.val ) {
{
gdjs.ConnectCode.condition1IsTrue_2.val = gdjs.evtTools.input.cursorOnObject(gdjs.ConnectCode.mapOfGDgdjs_46ConnectCode_46GDConnectButtonObjects2Objects, runtimeScene, true, false);
}}
gdjs.ConnectCode.conditionTrue_2.val = true && gdjs.ConnectCode.condition0IsTrue_2.val && gdjs.ConnectCode.condition1IsTrue_2.val;
}
if( gdjs.ConnectCode.condition1IsTrue_1.val ) {
    gdjs.ConnectCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.ConnectCode.GDConnectButtonObjects2.length;j<jLen;++j) {
        if ( gdjs.ConnectCode.GDConnectButtonObjects1_1final.indexOf(gdjs.ConnectCode.GDConnectButtonObjects2[j]) === -1 )
            gdjs.ConnectCode.GDConnectButtonObjects1_1final.push(gdjs.ConnectCode.GDConnectButtonObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.ConnectCode.GDConnectButtonObjects1_1final, gdjs.ConnectCode.GDConnectButtonObjects1);
}
}
}if ( gdjs.ConnectCode.condition0IsTrue_0.val ) {
{
{gdjs.ConnectCode.conditionTrue_1 = gdjs.ConnectCode.condition1IsTrue_0;
gdjs.ConnectCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8468372);
}
}}
if (gdjs.ConnectCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("idEntry"), gdjs.ConnectCode.GDidEntryObjects1);
{gdjs.evtTools.p2p.connect((( gdjs.ConnectCode.GDidEntryObjects1.length === 0 ) ? "" :gdjs.ConnectCode.GDidEntryObjects1[0].getString()));
}}

}


};gdjs.ConnectCode.eventsList1 = function(runtimeScene) {

{



}


{


gdjs.ConnectCode.condition0IsTrue_0.val = false;
{
gdjs.ConnectCode.condition0IsTrue_0.val = gdjs.evtTools.p2p.onConnection();
}if (gdjs.ConnectCode.condition0IsTrue_0.val) {
{gdjs.evtTools.p2p.sendDataToAll("connected", "");
}}

}


{



}


{


gdjs.ConnectCode.condition0IsTrue_0.val = false;
{
gdjs.ConnectCode.condition0IsTrue_0.val = gdjs.evtTools.p2p.onEvent("connected", true);
}if (gdjs.ConnectCode.condition0IsTrue_0.val) {
{gdjs.evtTools.p2p.sendDataToAll("connected", "");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main game", true);
}}

}


};gdjs.ConnectCode.mapOfGDgdjs_46ConnectCode_46GDSingleObjects2Objects = Hashtable.newFrom({"Single": gdjs.ConnectCode.GDSingleObjects2});gdjs.ConnectCode.mapOfGDgdjs_46ConnectCode_46GDPasteObjects2Objects = Hashtable.newFrom({"Paste": gdjs.ConnectCode.GDPasteObjects2});gdjs.ConnectCode.mapOfGDgdjs_46ConnectCode_46GDCopyObjects1Objects = Hashtable.newFrom({"Copy": gdjs.ConnectCode.GDCopyObjects1});gdjs.ConnectCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Single"), gdjs.ConnectCode.GDSingleObjects2);

gdjs.ConnectCode.condition0IsTrue_0.val = false;
{
gdjs.ConnectCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ConnectCode.mapOfGDgdjs_46ConnectCode_46GDSingleObjects2Objects, runtimeScene, true, false);
}if (gdjs.ConnectCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main game", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Paste"), gdjs.ConnectCode.GDPasteObjects2);

gdjs.ConnectCode.condition0IsTrue_0.val = false;
{
gdjs.ConnectCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ConnectCode.mapOfGDgdjs_46ConnectCode_46GDPasteObjects2Objects, runtimeScene, true, false);
}if (gdjs.ConnectCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("idEntry"), gdjs.ConnectCode.GDidEntryObjects2);
{for(var i = 0, len = gdjs.ConnectCode.GDidEntryObjects2.length ;i < len;++i) {
    gdjs.ConnectCode.GDidEntryObjects2[i].setString(gdjs.ConnectCode.GDidEntryObjects2[i].getString() + (gdjs.evtsExt__Clipboard__ReadText.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Copy"), gdjs.ConnectCode.GDCopyObjects1);

gdjs.ConnectCode.condition0IsTrue_0.val = false;
{
gdjs.ConnectCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ConnectCode.mapOfGDgdjs_46ConnectCode_46GDCopyObjects1Objects, runtimeScene, true, false);
}if (gdjs.ConnectCode.condition0IsTrue_0.val) {
{gdjs.evtsExt__Clipboard__WriteText.func(runtimeScene, gdjs.evtTools.p2p.getCurrentId(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs.ConnectCode.eventsList3 = function(runtimeScene) {

{


gdjs.ConnectCode.condition0IsTrue_0.val = false;
gdjs.ConnectCode.condition1IsTrue_0.val = false;
{
gdjs.ConnectCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.ConnectCode.condition0IsTrue_0.val ) {
{
{gdjs.ConnectCode.conditionTrue_1 = gdjs.ConnectCode.condition1IsTrue_0;
gdjs.ConnectCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8472460);
}
}}
if (gdjs.ConnectCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.ConnectCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.ConnectCode.eventsList4 = function(runtimeScene) {

{


gdjs.ConnectCode.condition0IsTrue_0.val = false;
{
gdjs.ConnectCode.condition0IsTrue_0.val = gdjs.evtTools.p2p.onError();
}if (gdjs.ConnectCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ErrorText"), gdjs.ConnectCode.GDErrorTextObjects1);
{for(var i = 0, len = gdjs.ConnectCode.GDErrorTextObjects1.length ;i < len;++i) {
    gdjs.ConnectCode.GDErrorTextObjects1[i].setString(gdjs.evtTools.p2p.getLastError());
}
}}

}


};gdjs.ConnectCode.eventsList5 = function(runtimeScene) {

{



}


{



}


{



}


{


gdjs.ConnectCode.condition0IsTrue_0.val = false;
{
gdjs.ConnectCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.ConnectCode.condition0IsTrue_0.val) {
{gdjs.evtTools.p2p.useDefaultBrokerServer();
}}

}


{


gdjs.ConnectCode.eventsList0(runtimeScene);
}


{


gdjs.ConnectCode.eventsList1(runtimeScene);
}


{


gdjs.ConnectCode.eventsList3(runtimeScene);
}


{


gdjs.ConnectCode.eventsList4(runtimeScene);
}


};

gdjs.ConnectCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ConnectCode.GDbackgroudObjects1.length = 0;
gdjs.ConnectCode.GDbackgroudObjects2.length = 0;
gdjs.ConnectCode.GDbackgroudObjects3.length = 0;
gdjs.ConnectCode.GDidTextObjects1.length = 0;
gdjs.ConnectCode.GDidTextObjects2.length = 0;
gdjs.ConnectCode.GDidTextObjects3.length = 0;
gdjs.ConnectCode.GDidEntryObjects1.length = 0;
gdjs.ConnectCode.GDidEntryObjects2.length = 0;
gdjs.ConnectCode.GDidEntryObjects3.length = 0;
gdjs.ConnectCode.GDidEntryTextObjects1.length = 0;
gdjs.ConnectCode.GDidEntryTextObjects2.length = 0;
gdjs.ConnectCode.GDidEntryTextObjects3.length = 0;
gdjs.ConnectCode.GDidEntrySpriteObjects1.length = 0;
gdjs.ConnectCode.GDidEntrySpriteObjects2.length = 0;
gdjs.ConnectCode.GDidEntrySpriteObjects3.length = 0;
gdjs.ConnectCode.GDConnectButtonObjects1.length = 0;
gdjs.ConnectCode.GDConnectButtonObjects2.length = 0;
gdjs.ConnectCode.GDConnectButtonObjects3.length = 0;
gdjs.ConnectCode.GDCopyObjects1.length = 0;
gdjs.ConnectCode.GDCopyObjects2.length = 0;
gdjs.ConnectCode.GDCopyObjects3.length = 0;
gdjs.ConnectCode.GDPasteObjects1.length = 0;
gdjs.ConnectCode.GDPasteObjects2.length = 0;
gdjs.ConnectCode.GDPasteObjects3.length = 0;
gdjs.ConnectCode.GDConnectTextObjects1.length = 0;
gdjs.ConnectCode.GDConnectTextObjects2.length = 0;
gdjs.ConnectCode.GDConnectTextObjects3.length = 0;
gdjs.ConnectCode.GDCopyTextObjects1.length = 0;
gdjs.ConnectCode.GDCopyTextObjects2.length = 0;
gdjs.ConnectCode.GDCopyTextObjects3.length = 0;
gdjs.ConnectCode.GDPasteTextObjects1.length = 0;
gdjs.ConnectCode.GDPasteTextObjects2.length = 0;
gdjs.ConnectCode.GDPasteTextObjects3.length = 0;
gdjs.ConnectCode.GDErrorTextObjects1.length = 0;
gdjs.ConnectCode.GDErrorTextObjects2.length = 0;
gdjs.ConnectCode.GDErrorTextObjects3.length = 0;
gdjs.ConnectCode.GDidbackgroundObjects1.length = 0;
gdjs.ConnectCode.GDidbackgroundObjects2.length = 0;
gdjs.ConnectCode.GDidbackgroundObjects3.length = 0;
gdjs.ConnectCode.GDSingleObjects1.length = 0;
gdjs.ConnectCode.GDSingleObjects2.length = 0;
gdjs.ConnectCode.GDSingleObjects3.length = 0;
gdjs.ConnectCode.GDSingleTextObjects1.length = 0;
gdjs.ConnectCode.GDSingleTextObjects2.length = 0;
gdjs.ConnectCode.GDSingleTextObjects3.length = 0;

gdjs.ConnectCode.eventsList5(runtimeScene);
return;

}

gdjs['ConnectCode'] = gdjs.ConnectCode;
