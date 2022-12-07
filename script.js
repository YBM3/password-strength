let app = angular.module('app',[]);

app.controller('ctrl', function($scope){
  $scope.pass="1111111111111";
  $scope.v=function(){
    return test($scope.pass);
  };
});

let tests = [/[0-9]/, /[a-zA-Z]/, /[^A-Z-0-9]/i]

function test(pass){
  if(pass == null)
    return -1;
  let s = 0;
  if(pass.length < 8 && !pass.length)
    return 0;
  for(let i in tests)
    if(tests[i].test(pass))
      s +=33.33
  return s;
}


