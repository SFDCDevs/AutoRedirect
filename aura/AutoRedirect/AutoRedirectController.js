({
    handleRecordUpdated: function(component, event, helper) {
        var eventParams = event.getParams();
        if(eventParams.changeType === "CHANGED") {
            // get the fields that are changed for this record
            var changedFields = eventParams.changedFields;
            console.log('Fields that are changed: ' + JSON.stringify(changedFields));
            if('Type' in changedFields){
                if(component.get("v.simpleRecord").Type == 'Prospect'){
                   var urlEvent = $A.get("e.force:navigateToURL");
                    urlEvent.setParams({
                        "url": component.get("v.simpleRecord").Website
                    });
                    urlEvent.fire(); 
                }
            }
        }
    }
})