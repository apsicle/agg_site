from rest_framework import serializers
from .models import Posting, Metadata, Comment
from users.serializers import UserSerializer
from django.utils import timezone
import pdb

class MetadataSerializer(serializers.ModelSerializer):

    class Meta:
        model = Metadata
        fields = ('upvotes', 'downvotes', 'published_date', 'author')

class MetadataReadSerializer(MetadataSerializer):
    author = UserSerializer(many=True, read_only=True)
    
class PostingSerializer(serializers.ModelSerializer):

    class Meta:
        model = Posting
        fields = ('link', 'title')

    def create(self, validated_data):
        try:
            pdb.set_trace()
            user = self.context['request'].user
            metadata = Metadata.objects.create(published_date = timezone.now(), author = user)
        except:
            raise serializers.ValidationError("Failed to create metadata for posting. Are you logged in?")

        try:
            posting = Posting.objects.create(metadata=metadata, **validated_data)
        except:
            raise serializers.ValidationError("Failed to create posting. Link and title required.")
        
        return posting

class PostingReadSerializer(PostingSerializer):
    metadata = MetadataSerializer(many=True, read_only=True)