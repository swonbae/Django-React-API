from django.shortcuts import render, HttpResponse

# Create your views here.

def Index(request):
    # return render(request, 'index.html')    ## when using django as Front-end
    return HttpResponse("This is working")