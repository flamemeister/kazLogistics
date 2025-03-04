from django import forms

class ConsultationForm(forms.Form):
    name = forms.CharField(max_length=100, widget=forms.TextInput(attrs={'placeholder': 'Введите ваше имя'}))
    phone = forms.CharField(max_length=15, widget=forms.TextInput(attrs={'placeholder': 'Введите номер телефона'}))
    email = forms.EmailField(widget=forms.EmailInput(attrs={'placeholder': 'Введите адрес электронной почты'}))
    comment = forms.CharField(
        required=False,
        widget=forms.Textarea(attrs={'placeholder': 'Опишите свой вопрос или запрос...', 'rows': 4}),
    )
