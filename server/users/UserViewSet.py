from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from django.shortcuts import get_object_or_404
from django.db.models import Q
from .serializers import UserSerializer
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.authtoken.models import Token
from rest_framework.permissions import AllowAny

class UserViewSet(viewsets.ModelViewSet):
    """
    A simple ViewSet for listing or retrieving users.
    """

    serializer_class = UserSerializer
    queryset = User.objects.all()
    permission_classes = [AllowAny]

    def list(self, request):
        queryset = self.get_queryset()
        serializer = UserSerializer(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        queryset = self.get_queryset()
        user = get_object_or_404(queryset, pk=pk)
        serializer = UserSerializer(user)
        return Response(serializer.data)

    @action(methods=['post'], detail=False)
    def login(self, request):
        queryset = self.get_queryset()
        username = request.data.get('username')
        password = request.data.get('password')

        # We use the authenticate method because the password is hashed and we can't compare directly
        user = authenticate(request, username=username, password=password)
        
        if (user is not None):
            # Find or create the auth token
            try:
                token = Token.objects.get(user=user)
            except Token.DoesNotExist:
                token = Token.objects.create(user=user)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)

        # Return the token
        return Response({ 'token': token.key }, status=status.HTTP_200_OK)

    @action(methods=['post'], detail=False)
    def authenticate(self, request):
        queryset = self.get_queryset()        
        token = request.data.get('token')

        # Try to find the user associated with this authtoken
        try:
            user = Token.objects.get(key=token).user
        except Token.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = UserSerializer(user)

        return Response(serializer.data)