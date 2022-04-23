<!DOCTYPE html>
<html>
<head>
    <title>ИРО ЧР</title>
</head>
<body>
    <h2>Добрый день, {{$enroller->lastname}} {{$enroller->firstname}}!</h2>
    <p>Напоманиаем вам, что вы оставляли заявку на посещение мероприятия {{$event->title}}, 
        которое пройдёт {{ \Carbon\Carbon::createFromFormat('Y-m-d', $event->date)->translatedFormat('d F, Y') }} по адресу {{$event->location}}</p>
    <a href="https://statipkro.ru/event/{{$event->id}}">Информация о мероприятии</a>
    <hr>
    <p>По всем вопросам звоните по телефону: <a href="tel:+79667283843">+79667283843</a></p>
</body>
</html>
