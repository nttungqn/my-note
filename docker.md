# Docker

## Docker là gì ?

Docker là một platform hay tool cho dev và system admin có thể khởi chạy, deploy và running application với container. Nó cho phép tạo các môi trường độc lập và tách biệt để khởi chạy và phát triển ứng dụng và môi trường này được gọi là container. Khi cần deploy lên bất kỳ server nào chỉ cần run container của Docker thì application của bạn sẽ được khởi chạy ngay lập tức.

## Docker bao gồm những gì ?

- Image : library, code, environment variable những thứ cho app chạy

- Container là một instance của image

- Dockerfile define môi trường, port, settings, working directory là file config để build ra image
  
  ```
  Dockerfile -> Image -> Container
  ```

### Một số lệnh cơ bản

- List image/container:
  
  ```
  $ docker image/container ls
  ```

- Delete image/container:
  
  ```
  $ docker image/container rm <tên image/container >
  ```

- Delete all image hiện có:
  
  ```
  $ docker image rm $(docker images –a –q)
  ```

- List all container hiện có:
  
  ```
  $ docker ps –a
  ```

- Stop a container cụ thể:
  
  ```
  $ docker stop <tên container>
  ```

- Run container từ image và thay đổi tên container:
  
  ```
  $ docker run –name <tên container> <tên image>
  ```

- Stop all container:
  
  ```
  $ docker stop $(docker ps –a –q)
  ```

- Delete all container hiện có:
  
  ```
  $ docker rm $(docker ps –a –q)
  ```

- Show log a container:
  
  ```
  $ docker logs <tên container>   
  ```

- Build một image từ container:
  
  ```
  $ docker build -t <tên container> .
  ```

- Tạo một container chạy ngầm:
  
  ```
  $ docker run -d <tên image>
  ```

- Tải một image trên docker hub:
  
  ```
  $ docker pull <tên image>
  ```

- Start một container:
  
  ```
  $ docker start <tên container>
  ```

### Build image

```
docker build -t <docker-name>:<version> .
```

### Run container

```
docker run -p <port-server>:<port-docker> <docker-name>
```

## Docker compose

Docker compose là công cụ dùng để định nghĩa và run multi-container cho Docker application. Với compose bạn sử dụng file YAML để config các services cho application của bạn. Sau đó dùng command để create và run từ những config đó.

- Khai báo app’s environment trong Dockerfile.

- Khai báo các services cần thiết để chạy application trong file docker-compose.yml.

- Run docker-compose up để start và run app.
  
  ### Một số lệnh:
  
  ```
  docker-compose up
  docker-compose down
  ```
