var app = angular.module('chatApp', []);

app.controller('ChatController', function ($scope) {
    $scope.messages = [];
    $scope.newMessage = '';

    $scope.sendMessage = function () {
        if ($scope.newMessage.trim() !== '') {
            $scope.messages.push({
                type: 'sent',
                sender: 'You',
                text: $scope.newMessage
            });

            // Simulate receiving a message after a short delay
            setTimeout(function () {
                $scope.$apply(function () {
                    $scope.messages.push({
                        type: 'received',
                        sender: 'Friend',
                        text: 'Thanks for your message!'
                    });
                });
            }, 500);

            $scope.newMessage = '';
        }
    };
});
