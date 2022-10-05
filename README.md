<em> # Estructura básica de una Api con node + Express </em>

el archivo .env debe tener los siguiente valores:


```
PORT=8080
TOKEN=VALOR_DEL_TOKEN_SIN_COMILLAS_NI_PUNTO_Y_COMA
Para que el token sea funcional para todos los endpoints debe tener activado los scopes: 
playlist-modify-public y playlist-modify-private
```

**ENDPOINTS**

>**GET Track /api/v1/track/{id}**

>**GET Artist /api/v1/artist/{id}**

>**GET Artist Last (5) releases /api/v1/artist/lastreleases/{id}**

>**POST TRACK /api/v1/create/{id}/{name}/{description}**

>**PUT Follow (playlist) /api/v1/follow/{id}**

>**DELETE Follow (playlist) /api/v1/unfollow{id}**
