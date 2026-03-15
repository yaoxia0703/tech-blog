# Spring Boot RBAC 権限管理設計

この記事では、Spring Bootベースのシステムにおける
RBAC（Role Based Access Control）の設計について解説します。

## テーブル設計

- user
- role
- permission
- role_permission
- role_menu

## 技術スタック

- Spring Boot
- MyBatis Plus
- JWT