-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fullname" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "is_adm" BOOLEAN NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "RegistroDeHoras" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "data_registro" DATETIME NOT NULL,
    "hora_entrada" DATETIME NOT NULL,
    "hora_saida" DATETIME NOT NULL,
    "horas_trabalhadas" INTEGER NOT NULL,
    "horas_extras" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id_user" INTEGER NOT NULL,
    CONSTRAINT "RegistroDeHoras_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
