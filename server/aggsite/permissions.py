from rest_framework import permissions

class IsCreationOrIsAuthenticated(permissions.BasePermission):

    def has_permission(self, request, view):
        if request.user:
            if request.user.is_authenticated:
                return True
            

        if view.action == 'create':
            return True
        
        return False

class IsNotCreation(permissions.BasePermission):

    def has_permission(self, request, view):
        if view.action == 'create':
            return False

        return True