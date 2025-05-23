FROM sidcpatel/ruby1.9.3p551:latest

ENV RAILS_VERSION 3.0.0

RUN apt-get update && \
    apt-get install -y nodejs mysql-client postgresql-client sqlite3 --no-install-recommends && \
    rm -rf /var/lib/apt/lists/* && \
    gem install --no-rdoc --no-ri rails --version "$RAILS_VERSION" && \
gem install --no-rdoc --no-ri bundler brakeman codesake-dawn 
