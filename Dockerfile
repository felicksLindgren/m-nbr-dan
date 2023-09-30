FROM python:latest

RUN apt-get update && apt-get -y install cron vim

WORKDIR /app

COPY crontab /etc/cron.d/crontab
COPY *.py /app/
COPY requirements.txt /app/requirements.txt

RUN pip3 install --user -r requirements.txt

RUN chmod 0644 /etc/cron.d/crontab
RUN /usr/bin/crontab /etc/cron.d/crontab

CMD ["cron", "-f"]