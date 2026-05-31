function showMessage(message) {
    alert(message);
}

let dotNetHelper;

function registerDotNetHelper(helper) {
    dotNetHelper = helper;
}

function callCSharp() {
    dotNetHelper.invokeMethodAsync(
        "UpdateMessage",
        "Повідомлення отримано від JavaScript!"
    );
}