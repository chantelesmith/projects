jQuery.sap.require("chanzo.util.Formatter");

sap.ui.controller("chanzo.controller.App", {

	onPress:function(oEvent){
		var sName = this.getView()
		.byId("nameField")
		.getValue();
		sap.m.messageBox.alert("Hello " +sName);

	}
	
});