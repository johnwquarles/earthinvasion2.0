'use strict';

var socket = io();

function sendWaveTimeHelper(message, timeElapsed) {
  socket.emit('time', { message: message, timeElapsed: timeElapsed });
}

function sendAchievementHelper(achievementId) {
  socket.emit('achievement', achievementId);
}

function sendAccuracyHelper(message, accuracy) {
  socket.emit('accuracy', { message: message, accuracy: accuracy });
}

function clearCardsHelper() {
  socket.emit('clearCards');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlVuaXR5TG9hZGVycy9zb2NrZXRIZWxwZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJLE1BQU0sR0FBRyxFQUFFLEVBQUUsQ0FBQzs7QUFFbEIsU0FBUyxrQkFBa0IsQ0FBRSxPQUFPLEVBQUUsV0FBVyxFQUFFO0FBQ2pELFFBQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFDLENBQUMsQ0FBQztDQUNuRTs7QUFFRCxTQUFTLHFCQUFxQixDQUFFLGFBQWEsRUFBRTtBQUM3QyxRQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUMsQ0FBQztDQUMzQzs7QUFFRCxTQUFTLGtCQUFrQixDQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUU7QUFDOUMsUUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUMsQ0FBQyxDQUFDO0NBQ2pFOztBQUVELFNBQVMsZ0JBQWdCLEdBQUk7QUFDM0IsUUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztDQUMzQiIsImZpbGUiOiJVbml0eUxvYWRlcnMvc29ja2V0SGVscGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHNvY2tldCA9IGlvKCk7XG5cbmZ1bmN0aW9uIHNlbmRXYXZlVGltZUhlbHBlciAobWVzc2FnZSwgdGltZUVsYXBzZWQpIHtcbiAgc29ja2V0LmVtaXQoJ3RpbWUnLCB7bWVzc2FnZTogbWVzc2FnZSwgdGltZUVsYXBzZWQ6IHRpbWVFbGFwc2VkfSk7XG59XG5cbmZ1bmN0aW9uIHNlbmRBY2hpZXZlbWVudEhlbHBlciAoYWNoaWV2ZW1lbnRJZCkge1xuICBzb2NrZXQuZW1pdCgnYWNoaWV2ZW1lbnQnLCBhY2hpZXZlbWVudElkKTtcbn1cblxuZnVuY3Rpb24gc2VuZEFjY3VyYWN5SGVscGVyIChtZXNzYWdlLCBhY2N1cmFjeSkge1xuICBzb2NrZXQuZW1pdCgnYWNjdXJhY3knLCB7bWVzc2FnZTogbWVzc2FnZSwgYWNjdXJhY3k6IGFjY3VyYWN5fSk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyQ2FyZHNIZWxwZXIgKCkge1xuICBzb2NrZXQuZW1pdCgnY2xlYXJDYXJkcycpO1xufVxuIl19
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJVbml0eUxvYWRlcnMvc29ja2V0SGVscGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBzb2NrZXQgPSBpbygpO1xuXG5mdW5jdGlvbiBzZW5kV2F2ZVRpbWVIZWxwZXIgKG1lc3NhZ2UsIHRpbWVFbGFwc2VkKSB7XG4gIHNvY2tldC5lbWl0KCd0aW1lJywge21lc3NhZ2U6IG1lc3NhZ2UsIHRpbWVFbGFwc2VkOiB0aW1lRWxhcHNlZH0pO1xufVxuXG5mdW5jdGlvbiBzZW5kQWNoaWV2ZW1lbnRIZWxwZXIgKGFjaGlldmVtZW50SWQpIHtcbiAgc29ja2V0LmVtaXQoJ2FjaGlldmVtZW50JywgYWNoaWV2ZW1lbnRJZCk7XG59XG5cbmZ1bmN0aW9uIHNlbmRBY2N1cmFjeUhlbHBlciAobWVzc2FnZSwgYWNjdXJhY3kpIHtcbiAgc29ja2V0LmVtaXQoJ2FjY3VyYWN5Jywge21lc3NhZ2U6IG1lc3NhZ2UsIGFjY3VyYWN5OiBhY2N1cmFjeX0pO1xufVxuXG5mdW5jdGlvbiBjbGVhckNhcmRzSGVscGVyICgpIHtcbiAgc29ja2V0LmVtaXQoJ2NsZWFyQ2FyZHMnKTtcbn1cbiJdLCJmaWxlIjoiVW5pdHlMb2FkZXJzL3NvY2tldEhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9