FROM redis:7.0.11
RUN sysctl vm.overcommit_memory=1
COPY redis.conf /usr/local/etc/redis/redis.conf
CMD ["redis-server", "/usr/local/etc/redis/redis.conf"]