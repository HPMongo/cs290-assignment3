/**
* Create an object literal with the following key value pairs:
* type: {string} 'Goldfish'
* brand: {string} 'Pepperidge Farm'
* flavor: {string} 'Cheddar'
* count: {number} 2000
* It should be returned directly by the following function
* @return {object} - the object literal
*/

function returnObjectLiteral() {
  	return {brand: 'Pepperidge Farm', count: 2000, flavor: 'Cheddar',  type: 'Goldfish'}; //Modify ONLY this line
}

/**
* Create a constructor function for a `MessageLog` object.
* @constructor
* @param {string} user - The user associated to the message log
* The string indicating the user should be stored in the user property of the
* object instances.
*
* In addition, the following methods should be
* callable on a MessageLog object:
* logMessage( {string} messageText, {number} direction) - This should log a
* message
* as either being sent or received. A direction of 0 indicates it is a message
* the user sent. A direction of 1 indicates it is a message the user received.
* Behavior for other numbers is undefined.
* getSentMessage({number} n) - returns as a string, the content of the nth most
* recently sent message. To conserve memory, the object should only keep the
* last 5 message. n=0 retrieves the most recent n=4 retrieves the least recent
* of the 5.
* totalSent() - returns an integer indicating the total number of messages sent
* totalReceived() - returns an integer indicating the total number of messages
* received
*/

function logMessage(messageText, direction) {
	if(direction === 0) {							//sent message
		this.sentMessage.unshift(messageText);		//use unshift to add in front of the array
		this.totalSentMessage++;					//update message count
		if(this.sentMessage.length > 5) {
			this.sentMessage.pop();					//remove the last element when array > 5
		}
	} else if(direction === 1) {					//received message
		this.receivedMessage.unshift(messageText);	//use unshift to add in front of the array
		this.totalReceivedMessage++;				//update message count
		if(this.receivedMessage.length > 5) {
			this.receivedMessage.pop();				//remove the last element when array > 5
		}
	} 
}

function getSentMessage (messageNum) {
	return this.sentMessage[messageNum];
}

function totalSent () {
	return this.totalSentMessage;
}

function totalReceived () {
	return this.totalReceivedMessage;
}

function MessageLog(user) {
	this.user = user;
	this.logMessage = logMessage;
	this.getSentMessage = getSentMessage;
	this.totalSent = totalSent;
	this.totalReceived = totalReceived;
	this.sentMessage = [];
	this.receivedMessage = [];
	this.totalSentMessage = 0;
	this.totalReceivedMessage = 0;
}

/**
* Add a method to the MessageLog prototype:
* lastReceivedMessage() - returns the message text of the last message the user
* received.
*/
MessageLog.prototype.lastReceivedMessage = function() {
	return this.receivedMessage[0];
}

/**
* Create an instance of a `MessageLog` for the user "BlackHatGuy". Have the
* instance receive 3 messages: "foo", "bar" and "baz", received in that order.
* Assign it to the variable myLog.
*/

var myLog = new MessageLog("BlackHatGuy");
myLog.logMessage("foo", 1);
myLog.logMessage("bar", 1);
myLog.logMessage("baz", 1);
