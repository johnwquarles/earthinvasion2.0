"use strict";

var config = {
  width: 960,
  height: 600,
  params: { enableDebugging: "0" }
};

var u = new UnityObject2(config);

jQuery(function () {
  var $missingScreen = jQuery("#unityPlayer").find(".missing");
  var $brokenScreen = jQuery("#unityPlayer").find(".broken");
  $missingScreen.hide();
  $brokenScreen.hide();

  u.observeProgress(function (progress) {
    switch (progress.pluginStatus) {
      case "broken":
        $brokenScreen.find("a").click(function (e) {
          e.stopPropagation();
          e.preventDefault();
          u.installPlugin();
          return false;
        });
        $brokenScreen.show();
        break;
      case "missing":
        $missingScreen.find("a").click(function (e) {
          e.stopPropagation();
          e.preventDefault();
          u.installPlugin();
          return false;
        });
        $missingScreen.show();
        break;
      case "installed":
        $missingScreen.remove();
        break;
      case "first":
        break;
    }
  });
  u.initPlugin(jQuery("#unityPlayer")[0], "lib/Build.unity3d");
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlVuaXR5TG9hZGVycy9wbGF5ZXJTZXR1cC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQUksTUFBTSxHQUFHO0FBQ1gsT0FBSyxFQUFFLEdBQUc7QUFDVixRQUFNLEVBQUUsR0FBRztBQUNYLFFBQU0sRUFBRSxFQUFFLGVBQWUsRUFBQyxHQUFHLEVBQUU7Q0FDaEMsQ0FBQzs7QUFFRixJQUFJLENBQUMsR0FBRyxJQUFJLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQzs7QUFFakMsTUFBTSxDQUFDLFlBQVc7QUFDaEIsTUFBSSxjQUFjLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUM3RCxNQUFJLGFBQWEsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzNELGdCQUFjLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDdEIsZUFBYSxDQUFDLElBQUksRUFBRSxDQUFDOztBQUVyQixHQUFDLENBQUMsZUFBZSxDQUFDLFVBQVUsUUFBUSxFQUFFO0FBQ3BDLFlBQU8sUUFBUSxDQUFDLFlBQVk7QUFDMUIsV0FBSyxRQUFRO0FBQ1gscUJBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxFQUFFO0FBQ3pDLFdBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztBQUNwQixXQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDbkIsV0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDO0FBQ2xCLGlCQUFPLEtBQUssQ0FBQztTQUNkLENBQUMsQ0FBQztBQUNILHFCQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDckIsY0FBTTtBQUFBLEFBQ1IsV0FBSyxTQUFTO0FBQ1osc0JBQWMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxFQUFFO0FBQzFDLFdBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztBQUNwQixXQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDbkIsV0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDO0FBQ2xCLGlCQUFPLEtBQUssQ0FBQztTQUNkLENBQUMsQ0FBQztBQUNILHNCQUFjLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDdEIsY0FBTTtBQUFBLEFBQ1IsV0FBSyxXQUFXO0FBQ2Qsc0JBQWMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUN4QixjQUFNO0FBQUEsQUFDUixXQUFLLE9BQU87QUFDVixjQUFNO0FBQUEsS0FDVDtHQUNGLENBQUMsQ0FBQztBQUNILEdBQUMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLG1CQUFtQixDQUFDLENBQUM7Q0FDOUQsQ0FBQyxDQUFDIiwiZmlsZSI6IlVuaXR5TG9hZGVycy9wbGF5ZXJTZXR1cC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBjb25maWcgPSB7XG4gIHdpZHRoOiA5NjAsXG4gIGhlaWdodDogNjAwLFxuICBwYXJhbXM6IHsgZW5hYmxlRGVidWdnaW5nOlwiMFwiIH1cbn07XG5cbnZhciB1ID0gbmV3IFVuaXR5T2JqZWN0Mihjb25maWcpO1xuXG5qUXVlcnkoZnVuY3Rpb24oKSB7XG4gIHZhciAkbWlzc2luZ1NjcmVlbiA9IGpRdWVyeShcIiN1bml0eVBsYXllclwiKS5maW5kKFwiLm1pc3NpbmdcIik7XG4gIHZhciAkYnJva2VuU2NyZWVuID0galF1ZXJ5KFwiI3VuaXR5UGxheWVyXCIpLmZpbmQoXCIuYnJva2VuXCIpO1xuICAkbWlzc2luZ1NjcmVlbi5oaWRlKCk7XG4gICRicm9rZW5TY3JlZW4uaGlkZSgpO1xuXG4gIHUub2JzZXJ2ZVByb2dyZXNzKGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgIHN3aXRjaChwcm9ncmVzcy5wbHVnaW5TdGF0dXMpIHtcbiAgICAgIGNhc2UgXCJicm9rZW5cIjpcbiAgICAgICAgJGJyb2tlblNjcmVlbi5maW5kKFwiYVwiKS5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHUuaW5zdGFsbFBsdWdpbigpO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICAgICRicm9rZW5TY3JlZW4uc2hvdygpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJtaXNzaW5nXCI6XG4gICAgICAgICRtaXNzaW5nU2NyZWVuLmZpbmQoXCJhXCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdS5pbnN0YWxsUGx1Z2luKCk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgJG1pc3NpbmdTY3JlZW4uc2hvdygpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJpbnN0YWxsZWRcIjpcbiAgICAgICAgJG1pc3NpbmdTY3JlZW4ucmVtb3ZlKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImZpcnN0XCI6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfSk7XG4gIHUuaW5pdFBsdWdpbihqUXVlcnkoXCIjdW5pdHlQbGF5ZXJcIilbMF0sIFwibGliL0J1aWxkLnVuaXR5M2RcIik7XG59KTtcbiJdfQ==
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJVbml0eUxvYWRlcnMvcGxheWVyU2V0dXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGNvbmZpZyA9IHtcbiAgd2lkdGg6IDk2MCxcbiAgaGVpZ2h0OiA2MDAsXG4gIHBhcmFtczogeyBlbmFibGVEZWJ1Z2dpbmc6XCIwXCIgfVxufTtcblxudmFyIHUgPSBuZXcgVW5pdHlPYmplY3QyKGNvbmZpZyk7XG5cbmpRdWVyeShmdW5jdGlvbigpIHtcbiAgdmFyICRtaXNzaW5nU2NyZWVuID0galF1ZXJ5KFwiI3VuaXR5UGxheWVyXCIpLmZpbmQoXCIubWlzc2luZ1wiKTtcbiAgdmFyICRicm9rZW5TY3JlZW4gPSBqUXVlcnkoXCIjdW5pdHlQbGF5ZXJcIikuZmluZChcIi5icm9rZW5cIik7XG4gICRtaXNzaW5nU2NyZWVuLmhpZGUoKTtcbiAgJGJyb2tlblNjcmVlbi5oaWRlKCk7XG5cbiAgdS5vYnNlcnZlUHJvZ3Jlc3MoZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgc3dpdGNoKHByb2dyZXNzLnBsdWdpblN0YXR1cykge1xuICAgICAgY2FzZSBcImJyb2tlblwiOlxuICAgICAgICAkYnJva2VuU2NyZWVuLmZpbmQoXCJhXCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdS5pbnN0YWxsUGx1Z2luKCk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgJGJyb2tlblNjcmVlbi5zaG93KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIm1pc3NpbmdcIjpcbiAgICAgICAgJG1pc3NpbmdTY3JlZW4uZmluZChcImFcIikuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB1Lmluc3RhbGxQbHVnaW4oKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICAkbWlzc2luZ1NjcmVlbi5zaG93KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImluc3RhbGxlZFwiOlxuICAgICAgICAkbWlzc2luZ1NjcmVlbi5yZW1vdmUoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiZmlyc3RcIjpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9KTtcbiAgdS5pbml0UGx1Z2luKGpRdWVyeShcIiN1bml0eVBsYXllclwiKVswXSwgXCJsaWIvQnVpbGQudW5pdHkzZFwiKTtcbn0pO1xuIl0sImZpbGUiOiJVbml0eUxvYWRlcnMvcGxheWVyU2V0dXAuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==