import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    area: '',
    comment: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', phone: '', service: '', area: '', comment: '' });
  };

  const services = [
    {
      icon: 'Home',
      title: 'Уборка квартир',
      description: 'Профессиональная уборка жилых помещений любой площади',
      price: 'от 2 500 ₽'
    },
    {
      icon: 'Building2',
      title: 'Уборка офисов',
      description: 'Комплексная уборка офисных помещений и бизнес-центров',
      price: 'от 3 000 ₽'
    },
    {
      icon: 'Sparkles',
      title: 'Генеральная уборка',
      description: 'Глубокая уборка с мытьем окон и труднодоступных мест',
      price: 'от 4 500 ₽'
    },
    {
      icon: 'Paintbrush',
      title: 'После ремонта',
      description: 'Уборка строительной пыли и строительного мусора',
      price: 'от 5 000 ₽'
    },
    {
      icon: 'Droplets',
      title: 'Химчистка мебели',
      description: 'Профессиональная чистка диванов, кресел и ковров',
      price: 'от 1 500 ₽'
    },
    {
      icon: 'Wind',
      title: 'Мытье окон',
      description: 'Качественное мытье окон снаружи и внутри',
      price: 'от 800 ₽'
    }
  ];

  const prices = [
    { service: 'Однокомнатная квартира', price: '2 500 ₽', time: '2-3 часа' },
    { service: 'Двухкомнатная квартира', price: '3 200 ₽', time: '3-4 часа' },
    { service: 'Трехкомнатная квартира', price: '4 000 ₽', time: '4-5 часов' },
    { service: 'Офис до 50 м²', price: '3 000 ₽', time: '2-3 часа' },
    { service: 'Офис 50-100 м²', price: '5 500 ₽', time: '4-5 часов' },
    { service: 'Генеральная уборка', price: '+50% к базовой', time: '+2 часа' },
  ];

  return (
    <div className="min-h-screen">
      <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Sparkles" className="text-primary" size={32} />
              <h1 className="text-2xl font-bold text-primary">Ирида</h1>
            </div>
            <nav className="hidden md:flex gap-8">
              <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
              <a href="#prices" className="hover:text-primary transition-colors">Цены</a>
              <a href="#about" className="hover:text-primary transition-colors">О компании</a>
              <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button asChild className="hidden md:inline-flex">
              <a href="#order">Заказать</a>
            </Button>
          </div>
        </div>
      </header>

      <section className="relative bg-gradient-to-br from-primary/5 to-accent/5 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Профессиональный клининг для дома и бизнеса
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Более 10 лет опыта, квалифицированные специалисты и современное оборудование. 
                Гарантия качества на все виды работ.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="text-lg">
                  <a href="#order">Заказать уборку</a>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-lg">
                  <a href="#services">Все услуги</a>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/26d1f50c-e503-4dbb-ba42-601a03c8aa26/files/b8c8fb90-e7eb-4be0-a78d-67d14695b3c6.jpg"
                alt="Клининговые услуги"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный спектр клининговых услуг для квартир, домов и коммерческих помещений
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-primary" size={24} />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-primary">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Прайс-лист</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Прозрачные цены без скрытых доплат
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-0">
                <div className="divide-y">
                  {prices.map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-6 hover:bg-secondary/50 transition-colors">
                      <div>
                        <h3 className="font-semibold text-lg">{item.service}</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          <Icon name="Clock" size={14} className="inline mr-1" />
                          {item.time}
                        </p>
                      </div>
                      <p className="text-2xl font-bold text-primary">{item.price}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <p className="text-center text-sm text-muted-foreground mt-6">
              * Точная стоимость рассчитывается индивидуально после осмотра объекта
            </p>
          </div>
        </div>
      </section>

      <section id="order" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Заказать уборку</h2>
              <p className="text-lg text-muted-foreground">
                Оставьте заявку, и мы свяжемся с вами в течение 15 минут
              </p>
            </div>
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя</label>
                    <Input 
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <Input 
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Тип услуги</label>
                    <Select value={formData.service} onValueChange={(value) => setFormData({...formData, service: value})} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите услугу" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="apartment">Уборка квартиры</SelectItem>
                        <SelectItem value="office">Уборка офиса</SelectItem>
                        <SelectItem value="general">Генеральная уборка</SelectItem>
                        <SelectItem value="renovation">После ремонта</SelectItem>
                        <SelectItem value="furniture">Химчистка мебели</SelectItem>
                        <SelectItem value="windows">Мытье окон</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Площадь (м²)</label>
                    <Input 
                      type="number"
                      placeholder="50"
                      value={formData.area}
                      onChange={(e) => setFormData({...formData, area: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Комментарий</label>
                    <Textarea 
                      placeholder="Дополнительная информация о заказе..."
                      value={formData.comment}
                      onChange={(e) => setFormData({...formData, comment: e.target.value})}
                      rows={4}
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full text-lg">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">О компании</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" className="text-primary" size={40} />
                </div>
                <h3 className="text-3xl font-bold mb-2">10+</h3>
                <p className="text-muted-foreground">лет на рынке</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" className="text-primary" size={40} />
                </div>
                <h3 className="text-3xl font-bold mb-2">5000+</h3>
                <p className="text-muted-foreground">довольных клиентов</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Star" className="text-primary" size={40} />
                </div>
                <h3 className="text-3xl font-bold mb-2">4.9</h3>
                <p className="text-muted-foreground">средняя оценка</p>
              </div>
            </div>
            <Card>
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed mb-4">
                  <strong>Ирида</strong> — ведущая клининговая компания с многолетним опытом работы. 
                  Мы специализируемся на профессиональной уборке жилых и коммерческих помещений.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  Наша команда состоит из квалифицированных специалистов, прошедших тщательный отбор 
                  и обучение. Мы используем только сертифицированные экологичные средства и современное оборудование.
                </p>
                <p className="text-lg leading-relaxed">
                  Гарантируем высокое качество работ, прозрачные цены и индивидуальный подход к каждому клиенту.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Контакты</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="pt-8">
                  <Icon name="Phone" className="text-primary mx-auto mb-4" size={40} />
                  <h3 className="font-semibold mb-2">Телефон</h3>
                  <a href="tel:+79001234567" className="text-primary hover:underline text-lg">
                    +7 (900) 123-45-67
                  </a>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-8">
                  <Icon name="Mail" className="text-primary mx-auto mb-4" size={40} />
                  <h3 className="font-semibold mb-2">Email</h3>
                  <a href="mailto:info@irida-clean.ru" className="text-primary hover:underline text-lg">
                    info@irida-clean.ru
                  </a>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-8">
                  <Icon name="MapPin" className="text-primary mx-auto mb-4" size={40} />
                  <h3 className="font-semibold mb-2">Адрес</h3>
                  <p className="text-muted-foreground">
                    г. Москва, ул. Примерная, 123
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Sparkles" size={24} />
                <h3 className="text-xl font-bold">Ирида</h3>
              </div>
              <p className="text-sm opacity-80">
                Профессиональный клининг с 2014 года
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#services" className="hover:opacity-100">Уборка квартир</a></li>
                <li><a href="#services" className="hover:opacity-100">Уборка офисов</a></li>
                <li><a href="#services" className="hover:opacity-100">Генеральная уборка</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#about" className="hover:opacity-100">О нас</a></li>
                <li><a href="#prices" className="hover:opacity-100">Цены</a></li>
                <li><a href="#contacts" className="hover:opacity-100">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>+7 (900) 123-45-67</li>
                <li>info@irida-clean.ru</li>
                <li>Пн-Вс: 8:00 - 22:00</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-sm opacity-80">
            <p>&copy; 2024 Ирида. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
