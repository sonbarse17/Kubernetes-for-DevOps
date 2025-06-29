FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 5002

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["service-notification/src/service-notification.csproj", "service-notification/src/"]
RUN dotnet restore "service-notification/src/service-notification.csproj"
COPY . .
WORKDIR "/src/service-notification/src"
RUN dotnet build "service-notification.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "service-notification.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "service-notification.dll"]