from .models import * 
from .serializers import *
from rest_framework import viewsets, status
from aggsite.permissions import IsNotCreation
from django.utils import timezone

class PostingViewSet(viewsets.ModelViewSet):
    queryset = Posting.objects.all()
    serializer_class = PostingSerializer
    permission_classes = (IsNotCreation,)
        

