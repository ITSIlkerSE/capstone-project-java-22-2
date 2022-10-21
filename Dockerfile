FROM openjdk:17

LABEL maintainer="test@neuefische.de"

ADD backend/target/myCapstoneProject.jar myCapstoneProject.jar

CMD ["sh", "-c", "java -DServer.port=$PORT -jar /myCapstoneProject.jar"]