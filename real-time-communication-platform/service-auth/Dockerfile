FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["src/service-auth.csproj", "src/"]
RUN dotnet restore "src/service-auth.csproj"
COPY . .
WORKDIR "/src/src"
RUN dotnet build "service-auth.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "service-auth.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "service-auth.dll"]