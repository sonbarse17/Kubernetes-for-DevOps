FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 5001

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["service-chat/src/service-chat.csproj", "service-chat/src/"]
RUN dotnet restore "service-chat/src/service-chat.csproj"
COPY . .
WORKDIR "/src/service-chat/src"
RUN dotnet build "service-chat.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "service-chat.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "service-chat.dll"]