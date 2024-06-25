from django.urls import path
from .views import PostList, PostDetail, CommentListCreate, BookmarkListCreate

urlpatterns = [
    path('posts/', PostList.as_view(), name='post-list'),
    path('posts/<int:pk>/', PostDetail.as_view(), name='post-detail'),
    path('comments/', CommentListCreate.as_view(), name='comment-list-create'),
    path('bookmarks/', BookmarkListCreate.as_view(), name='bookmark-list-create'),
]
