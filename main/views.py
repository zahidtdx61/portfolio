from django.shortcuts import render

# Create your views here.
def index(request):
    title = 'home'
    context = {'title': title}
    
    return render(request, 'main/index.html', context)