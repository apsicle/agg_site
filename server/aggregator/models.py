from django.db import models
from users.serializers import UserSerializer
from django.contrib.auth.models import User

# Create your models here.
class Metadata(models.Model):
    upvotes = models.FloatField(default=0)
    downvotes = models.FloatField(default=0)
    published_date = models.DateTimeField()
    author = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)

class Posting(models.Model):
    metadata = models.ForeignKey(Metadata, on_delete=models.CASCADE, null=True, blank=True)
    title = models.CharField(max_length=200, null=True, blank=True)
    link = models.CharField(max_length=200, null=True, blank=True)

class Comment(models.Model):
    metadata = models.ForeignKey(Metadata, on_delete=models.CASCADE)
