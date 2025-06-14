FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 5000

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["service-auth/src/service-auth.csproj", "service-auth/src/"]
RUN dotnet restore "service-auth/src/service-auth.csproj"
COPY . .
WORKDIR "/src/service-auth/src"
RUN dotnet build "service-auth.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "service-auth.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "service-auth.dll"]