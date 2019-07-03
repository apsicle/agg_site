from .models import * 
from .serializers import *
from rest_framework import viewsets, status
from aggsite.permissions import IsNotCreationOrIsAuthenticated
from django.utils import timezone

class PostingViewSet(viewsets.ModelViewSet):
    queryset = Posting.objects.all()
    permission_classes = (IsNotCreationOrIsAuthenticated,)
        
    def get_serializer_class(self):
        if self.action == 'create':
            return PostingSerializer
        else:
            return PostingReadSerializer

