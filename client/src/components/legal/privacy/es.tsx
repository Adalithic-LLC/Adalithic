// Single source of truth for the Arcatext privacy policy text.
// Rendered both in the homepage About modal (about.tsx) and on the /privacy page.
export function PrivacyEs() {
  return (
    <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
      <p className="font-medium text-secondary">Operado por Adalithic LLC</p>
      <p>Última actualización: August 11, 2026</p>
      <p>
        Arcatext es un teclado personalizado y una aplicación de idiomas diseñada para ayudar a los
        usuarios a escribir, traducir, reformular y comprender mejor los mensajes en distintos
        idiomas. Esta Política de Privacidad explica qué información procesa Arcatext, cómo se
        utiliza esa información, cuándo se almacena, cuándo puede compartirse y qué opciones tiene
        usted.
      </p>
      <p>Al usar Arcatext, usted acepta las prácticas descritas en esta Política de Privacidad.</p>

      <h3 className="font-semibold text-secondary pt-2">1. Quiénes Somos</h3>
      <p>Arcatext es operado por Adalithic LLC.</p>
      <p>Para preguntas sobre privacidad, contáctenos en:</p>
      <p>
        Correo electrónico: arcatextapp@gmail.com
        <br />
        Página de soporte: https://adalithic.com/
      </p>
      <p>Si estos datos de contacto cambian, actualizaremos esta Política de Privacidad.</p>

      <h3 className="font-semibold text-secondary pt-2">2. Información Que Procesamos</h3>
      <p>
        Arcatext está diseñado para procesar únicamente la información necesaria para proporcionar,
        mejorar, personalizar y dar soporte a las funciones de idioma de la aplicación.
      </p>
      <div className="bg-primary/5 border border-primary/20 p-4 rounded-lg">
        <h3 className="font-semibold text-secondary mb-2">En términos simples</h3>
        <ol className="list-decimal list-outside pl-5 space-y-2">
          <li>Arcatext no vende sus datos a nadie.</li>
          <li>Solo rastreamos los mensajes que son Reformulados (usted tiene que tocar el botón Reformular, así que si escribe con el teclado sin tocar Reformular, no se rastrean ni almacenan mensajes).</li>
          <li>Usamos los datos para comprender mejor su dominio del idioma y ofrecer funciones de aprendizaje. ¡No nos interesa personalmente lo que usted escribe, solo queremos ayudar a acelerar su aprendizaje de idiomas!</li>
          <li>Filtramos cierto texto Reformulado y no lo almacenamos (por ejemplo, contraseñas, números de tarjeta y códigos; vea la lista completa en la Sección 7).</li>
          <li>Puede desactivar o activar el rastreo de Reformulación en cualquier momento (en la aplicación principal de Arcatext). De forma predeterminada está en estado 'activado' para poder ofrecer funciones de aprendizaje.</li>
        </ol>
      </div>
      <p className="font-medium">A. Texto Que Usted Elige Traducir, Reformular, Revisar o Analizar</p>
      <p>
        Cuando usa funciones de Arcatext como traducción, Reformulación, traducción inversa,
        sugerencias de sinónimos, asistencia gramatical, aclaración de significado o
        retroalimentación de aprendizaje, el texto que envía puede ser procesado por Arcatext y
        puede enviarse a proveedores de servicios de IA de terceros para que la función solicitada
        pueda funcionar.
      </p>
      <p>Esto puede incluir:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Mensajes que escribe en el teclado de Arcatext</li>
        <li>Mensajes que elige Reformular</li>
        <li>Texto que selecciona para traducción o reformulación</li>
        <li>Texto que le pide a Arcatext revisar, explicar o transformar</li>
        <li>
          Contexto necesario para mejorar la calidad de la traducción o Reformulación, como el
          idioma seleccionado, el alfabeto, el tono, la formalidad o los ajustes de género
        </li>
      </ul>
      <p className="font-medium">B. Mensajes Reformulados Vinculados a Su Perfil</p>
      <p>Arcatext puede almacenar los mensajes que usted Reformula con el fin de proporcionar:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Métricas de rendimiento</li>
        <li>Seguimiento del progreso</li>
        <li>Funciones de aprendizaje personalizadas</li>
        <li>Historial de escritura</li>
        <li>Perspectivas de aprendizaje de idiomas</li>
        <li>Otras funciones de Arcatext</li>
      </ul>
      <p>
        Estos mensajes Reformulados pueden vincularse a su perfil de Arcatext para que la aplicación
        pueda mostrarle información como:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Su historial de Reformulación</li>
        <li>Su progreso de aprendizaje</li>
        <li>Sus patrones de práctica de idiomas</li>
        <li>Sus idiomas o funciones más utilizados</li>
        <li>Métricas de rendimiento relacionadas con su uso de Arcatext</li>
        <li>Recomendaciones personalizadas o herramientas de aprendizaje</li>
      </ul>
      <p>
        Los mensajes Reformulados que permanecen conectados a su perfil se tratan como datos
        confidenciales del usuario. Adalithic LLC no vende, licencia ni comparte los mensajes
        Reformulados vinculados al perfil con empresas externas, anunciantes, corredores de datos ni
        terceros no relacionados.
      </p>
      <p>
        Los mensajes Reformulados vinculados al perfil son utilizados internamente por Adalithic LLC
        para proporcionar las funciones de Arcatext, mantener la aplicación, mejorar la experiencia
        del usuario y dar soporte a la funcionalidad relacionada con el aprendizaje.
      </p>
      <p className="font-medium">C. Ajustes del Teclado y Preferencias de Idioma</p>
      <p>Arcatext puede procesar ajustes de la aplicación y preferencias de idioma, tales como:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Idioma de origen</li>
        <li>Idioma de destino</li>
        <li>Idioma del teclado</li>
        <li>Opciones de alfabeto o escritura, como escritura estándar o texto romanizado</li>
        <li>
          Género del hablante, género del destinatario o ajustes de género del chat grupal cuando
          se necesitan para la precisión de la traducción
        </li>
        <li>Preferencias de tono, formalidad o aprendizaje</li>
        <li>Preferencias de funciones dentro de la aplicación</li>
      </ul>
      <p>
        Estos ajustes se utilizan para proporcionar la experiencia de teclado, traducción,
        Reformulación y aprendizaje. Algunos ajustes pueden almacenarse localmente en su dispositivo
        o vincularse a su perfil si crea o usa una cuenta de Arcatext.
      </p>
      <p className="font-medium">D. Información de la Cuenta</p>
      <p>
        Si Arcatext ofrece funciones basadas en cuenta, podemos recopilar y almacenar información de
        la cuenta como:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Dirección de correo electrónico</li>
        <li>Nombre de usuario</li>
        <li>Contraseña o credenciales de autenticación</li>
        <li>Estado de la suscripción</li>
        <li>Preferencias de la aplicación</li>
        <li>Ajustes del perfil</li>
      </ul>
      <p>
        Las contraseñas, si se usan, no se almacenan en texto plano. La autenticación también puede
        ser gestionada por proveedores de identidad de terceros, proveedores de tiendas de
        aplicaciones o servicios de plataforma.
      </p>
      <p className="font-medium">E. Información del Dispositivo y la Plataforma</p>
      <p>
        Arcatext puede acceder a información del dispositivo y la plataforma necesaria para
        proporcionar funcionalidad, inicializar ajustes, mejorar el rendimiento y dar soporte a la
        compatibilidad entre dispositivos y sistemas operativos.
      </p>
      <p>Esto puede incluir:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Ajustes de idioma del dispositivo</li>
        <li>Tipo de dispositivo</li>
        <li>Versión del sistema operativo</li>
        <li>Versión de la aplicación</li>
        <li>Información de configuración relacionada con la plataforma</li>
        <li>Información del estado de los permisos</li>
      </ul>
      <p>
        Esta información se utiliza para configurar y dar soporte a la experiencia de la aplicación
        y no está destinada a identificarlo directamente.
      </p>
      <p className="font-medium">F. Información Técnica y de Diagnóstico Básica</p>
      <p>
        Arcatext puede procesar información técnica limitada necesaria para operar, proteger,
        mejorar o solucionar problemas de la aplicación, tales como:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Registros de fallos</li>
        <li>Datos de rendimiento</li>
        <li>Informes de errores</li>
        <li>Eventos básicos de uso</li>
        <li>Si una función se abrió, completó o falló</li>
      </ul>
      <p>Cuando es posible, esta información se recopila de una manera que no lo identifica directamente.</p>
      <p className="font-medium">G. Diagnósticos anónimos de calidad de escritura y de Glide</p>
      <p>
        Para medir y mejorar la corrección automática y la escritura Glide (deslizando), Arcatext recopila diagnósticos anónimos y agregados sobre el rendimiento de estas funciones. Esta información se asocia a un identificador aleatorio por instalación que no está vinculado a su cuenta, su nombre, su correo electrónico ni la identidad de su dispositivo.
      </p>
      <p>En el caso de la corrección automática, esto incluye:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Con qué frecuencia se mantienen o se deshacen las correcciones automáticas</li>
        <li>Recuentos agregados de qué letra se cambió por qué otra letra</li>
        <li>El número de pulsaciones de teclas</li>
        <li>Mediciones anónimas de precisión de pulsación (a qué distancia del centro de la tecla caen las pulsaciones)</li>
        <li>Los ajustes de corrección actuales de la aplicación</li>
      </ul>
      <p>En el caso de la escritura Glide, esto incluye:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Cuántos deslizamientos produjeron una palabra</li>
        <li>Con qué frecuencia eligió una sugerencia distinta o borró el resultado</li>
        <li>En qué posición de la lista de sugerencias apareció la palabra deseada</li>
        <li>Mediciones anónimas de la geometría del deslizamiento, como la velocidad habitual, la suavidad y la distancia a la que los deslizamientos pasan del centro de las teclas</li>
        <li>Los ajustes de Glide actuales de la aplicación</li>
      </ul>
      <p>Ambos incluyen además la versión de su aplicación, la versión de su sistema operativo y el idioma de teclado activo.</p>
      <p>Ninguno de los dos incluye jamás las palabras, letras o mensajes que usted escribe. No se recopila ningún contenido escrito. Los recuentos agregados de cambios de letras y de geometría de deslizamiento no permiten reconstruir nada de lo que usted haya escrito. Esta información se utiliza únicamente para medir y mejorar la calidad de la escritura. No se vende, no se comparte con fines publicitarios y no se utiliza para rastrearle en aplicaciones o sitios web de otras empresas.</p>
      <p>Puede desactivarlo en cualquier momento en la aplicación principal de Arcatext, en los ajustes de almacenamiento de datos de Reformulación. Está activado de forma predeterminada, y ese único control cubre tanto los diagnósticos de corrección automática como los de Glide.</p>
      <p className="font-medium">H. Información Que No Recopilamos Intencionadamente</p>
      <p>Arcatext no recopila intencionadamente:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Su ubicación precisa</li>
        <li>Sus contactos</li>
        <li>Sus fotos</li>
        <li>La información completa de su tarjeta de pago</li>
        <li>El contenido de todo lo que escribe fuera de las funciones de Arcatext</li>
        <li>Contraseñas escritas en otras aplicaciones</li>
        <li>Códigos de seguridad escritos en otras aplicaciones</li>
      </ul>
      <p>
        Arcatext procesa el texto que usted elige enviar a través de las funciones de Arcatext.
        Arcatext no utiliza los permisos del teclado para recopilar en secreto todo el texto que
        usted escribe.
      </p>

      <h3 className="font-semibold text-secondary pt-2">
        3. Permisos del Teclado Personalizado y Acceso a la Red
      </h3>
      <p>
        Arcatext funciona como un teclado de terceros y una herramienta de idiomas. Algunas
        funciones pueden requerir permisos adicionales, conectividad a internet o acceso a nivel de
        dispositivo según su dispositivo, sistema operativo o plataforma.
      </p>
      <p>Por ejemplo:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          En dispositivos Apple, los usuarios pueden necesitar habilitar "Permitir acceso total"
          para ciertas funciones de teclado y de idioma en línea.
        </li>
        <li>
          En dispositivos Android, se puede solicitar a los usuarios que concedan permisos
          relacionados con la funcionalidad del teclado, el acceso a internet, las notificaciones o
          las funciones de la aplicación.
        </li>
      </ul>
      <p>Estos permisos pueden ser necesarios para funciones como:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Traducción con IA</li>
        <li>Reformulación</li>
        <li>Traducción inversa</li>
        <li>Revisión de idioma</li>
        <li>Métricas de rendimiento</li>
        <li>Funciones de aprendizaje</li>
        <li>Procesamiento de idioma basado en la nube</li>
        <li>Sincronización de la cuenta</li>
      </ul>
      <p>
        Cuando estos permisos están habilitados, Arcatext puede enviar el texto que usted elige
        procesar a nuestros proveedores de servicios para que la función solicitada pueda funcionar.
      </p>
      <p>
        Arcatext no utiliza los permisos del teclado para recopilar en secreto todo lo que usted
        escribe, rastrear actividad de escritura no relacionada ni monitorear información fuera de
        las funciones de Arcatext.
      </p>
      <p>
        No debe usar Arcatext para escribir contraseñas, información de pago, códigos de seguridad u
        otra información altamente sensible. Algunos sistemas operativos pueden cambiar
        automáticamente al teclado del sistema para los campos de contraseña, pero los usuarios aún
        deben tener precaución al introducir información sensible.
      </p>
      <p>
        Puede deshabilitar los permisos del teclado, los permisos de internet o los ajustes de
        acceso relacionados en cualquier momento a través de los ajustes de su dispositivo, aunque
        algunas funciones de Arcatext pueden dejar de funcionar correctamente.
      </p>

      <h3 className="font-semibold text-secondary pt-2">4. Cómo Usamos la Información</h3>
      <p>
        Arcatext usa la información con fines relacionados con proporcionar, personalizar, analizar,
        proteger y mejorar la aplicación.
      </p>
      <p>Podemos usar la información para:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Traducir texto</li>
        <li>Reformular mensajes</li>
        <li>Proporcionar frases alternativas o sinónimos</li>
        <li>Revisar el significado de una traducción</li>
        <li>Explicar las elecciones de idioma</li>
        <li>Dar soporte a diferentes escrituras u opciones de romanización</li>
        <li>Aplicar ajustes de género, tono o formalidad</li>
        <li>Almacenar mensajes Reformulados para funciones de aprendizaje orientadas al usuario</li>
        <li>Proporcionar métricas de rendimiento y seguimiento del progreso</li>
        <li>Personalizar las recomendaciones de aprendizaje de idiomas</li>
        <li>Mejorar la fiabilidad y el rendimiento de la aplicación</li>
        <li>Mejorar los sistemas de idioma de Arcatext y las funciones de modelos de lenguaje grandes</li>
        <li>Detectar errores, fallos, abusos o problemas de seguridad</li>
        <li>Mantener la seguridad de la aplicación</li>
        <li>Responder a solicitudes de soporte</li>
        <li>Cumplir con las obligaciones legales</li>
      </ul>
      <p>No usamos los mensajes Reformulados vinculados al perfil para crear perfiles publicitarios.</p>

      <h3 className="font-semibold text-secondary pt-2">
        5. Procesamiento con IA y Proveedores de Servicios de Terceros
      </h3>
      <p>
        Para proporcionar funciones de traducción e idioma, Arcatext puede enviar el texto enviado y
        los ajustes relacionados a proveedores externos de modelos de IA y otros proveedores de
        servicios.
      </p>
      <p>
        Estos proveedores procesan el texto para devolver traducciones, Reformulaciones,
        explicaciones u otros resultados de idioma. Su manejo de los datos se rige por sus propias
        políticas de privacidad, términos y prácticas de procesamiento.
      </p>
      <p>
        A la fecha de la última actualización de esta política, nuestros proveedores de modelos de
        IA declaran que los datos enviados a través de sus API no se utilizan para entrenar ni
        mejorar sus modelos de forma predeterminada, a menos que el cliente lo autorice. Arcatext no
        autoriza intencionadamente el entrenamiento de modelos con contenido de traducción enviado
        por el usuario, a menos que esta política se actualice para indicar lo contrario.
      </p>
      <p>Arcatext también puede usar proveedores de servicios para:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Alojamiento de la aplicación</li>
        <li>Almacenamiento en base de datos</li>
        <li>Análisis</li>
        <li>Informes de fallos</li>
        <li>Atención al cliente</li>
        <li>Monitoreo de seguridad</li>
        <li>Autenticación</li>
        <li>Procesamiento de pagos</li>
        <li>Procesamiento con IA y funcionalidad de modelos de lenguaje</li>
      </ul>
      <p>
        A estos proveedores se les permite procesar información únicamente en la medida necesaria
        para prestar servicios a Arcatext y Adalithic LLC.
      </p>

      <h3 className="font-semibold text-secondary pt-2">6. Almacenamiento de Mensajes Reformulados</h3>
      <p>Arcatext puede almacenar los mensajes que usted Reformula para que podamos proporcionar:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Métricas de rendimiento</li>
        <li>Funciones de aprendizaje</li>
        <li>Historial del usuario</li>
        <li>Seguimiento del progreso</li>
        <li>Herramientas de idioma personalizadas</li>
      </ul>
      <p>
        Cuando los mensajes Reformulados se vinculan a su perfil, pueden asociarse con información
        como su cuenta, dirección de correo electrónico, nombre de usuario, preferencias de la
        aplicación o historial de uso. Esta conexión permite que Arcatext proporcione funciones
        personalizadas.
      </p>
      <p>
        Los mensajes Reformulados vinculados al perfil son confidenciales y no se venden, licencian
        ni comparten fuera de Adalithic LLC, salvo con proveedores de servicios que procesan los
        datos en nuestro nombre para operar Arcatext.
      </p>
      <p>Ejemplos de funciones que pueden depender de los mensajes Reformulados almacenados incluyen:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Seguir su mejora a lo largo del tiempo</li>
        <li>Mostrar estadísticas de aprendizaje de idiomas</li>
        <li>Ayudarle a revisar mensajes Reformulados anteriores</li>
        <li>Identificar patrones de gramática o vocabulario</li>
        <li>Mejorar las recomendaciones personalizadas</li>
        <li>Dar soporte a futuras herramientas de aprendizaje dentro de Arcatext</li>
      </ul>

      <h3 className="font-semibold text-secondary pt-2">
        7. Lo Que Filtramos y Nunca Almacenamos ni Registramos
      </h3>
      <p>
        Para protegerle, Arcatext examina automáticamente el texto en su dispositivo antes de que se
        almacene cualquier entrada Reformulada. Cuando detecta algo sensible, descarta la entrada
        completa; no almacena una versión abreviada ni censurada, y nada se vincula a su perfil.
      </p>
      <p>Una entrada Reformulada NO se almacena cuando:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          <span className="font-medium">Campos seguros o sensibles</span>: está escribiendo en un
          campo de contraseña o de entrada segura, o en un campo designado para correo electrónico,
          números de teléfono, PIN o códigos numéricos, URL o búsqueda.
        </li>
        <li>
          <span className="font-medium">Direcciones de correo electrónico</span>: el texto contiene
          una dirección de correo electrónico.
        </li>
        <li>
          <span className="font-medium">Números de tarjeta de pago</span>: el texto contiene una
          secuencia de 13 a 16 dígitos que parece un número de tarjeta de crédito o débito.
        </li>
        <li>
          <span className="font-medium">Códigos de verificación o de un solo uso</span>: el texto
          contiene un código independiente de 4 a 8 dígitos.
        </li>
        <li>
          <span className="font-medium">Números de cuenta o de identificación</span>: el texto
          contiene una serie continua larga de 9 o más dígitos.
        </li>
        <li>
          <span className="font-medium">Contraseñas, claves de API y otros secretos</span>: el
          texto contiene un token de alta entropía que parece una contraseña, una clave u otro
          secreto aleatorio.
        </li>
      </ul>
      <p>En caso de duda, Arcatext opta por no almacenar.</p>
      <p>
        <span className="font-medium">Registros del servidor.</span> Nuestros servidores nunca
        registran el contenido de sus mensajes. Los registros solo anotan metadatos operativos: un
        identificador de cuenta, el estado de la solicitud, la hora y un identificador de solicitud
        opaco, utilizados para mantener el servicio fiable y para diagnosticar problemas.
      </p>
      <p>
        <span className="font-medium">Su control.</span> Puede desactivar por completo el
        almacenamiento de Reformulación en cualquier momento en la aplicación de Arcatext.
      </p>

      <h3 className="font-semibold text-secondary pt-2">
        8. Datos de Idioma Anonimizados y Desidentificados
      </h3>
      <p>
        Arcatext y Adalithic LLC pueden usar los mensajes almacenados y las interacciones de idioma
        para mejorar los sistemas de idioma, la calidad de la traducción, las funciones de
        Reformulación y el rendimiento de los modelos de lenguaje grandes.
      </p>
      <p>
        Arcatext y Adalithic LLC también pueden crear conjuntos de datos de idioma anonimizados,
        desidentificados o agregados derivados de los mensajes enviados por los usuarios. Estos
        conjuntos de datos se utilizan internamente por Adalithic LLC para mejorar las funciones y
        la calidad de idioma de Arcatext. No vendemos, licenciamos ni compartimos estos conjuntos de
        datos con terceros.
      </p>
      <p>
        Los conjuntos de datos anonimizados o desidentificados no están destinados a identificarlo
        personalmente ni a asociarse con un perfil de usuario específico. Sin embargo, ningún
        proceso de anonimización o desidentificación puede garantizar que la reidentificación sea
        imposible en toda circunstancia. Adalithic LLC utiliza salvaguardas razonables diseñadas
        para reducir este riesgo.
      </p>

      <h3 className="font-semibold text-secondary pt-2">
        9. Retención de Datos, Eliminación de la Cuenta y Su Derecho al Borrado
      </h3>
      <p>
        Conservamos la información solo durante el tiempo que sea razonablemente necesario para los
        fines descritos en esta Política de Privacidad, a menos que la ley exija un período de
        retención más largo.
      </p>
      <p>En general:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          Los mensajes Reformulados vinculados a su perfil pueden conservarse mientras su cuenta
          esté activa o según sea necesario para proporcionar funciones y métricas.
        </li>
        <li>Las preferencias de la aplicación pueden almacenarse localmente en su dispositivo o vincularse a su perfil.</li>
        <li>
          Los registros técnicos pueden conservarse temporalmente con fines de depuración,
          fiabilidad, prevención de abusos o seguridad.
        </li>
        <li>
          Los mensajes de soporte pueden conservarse según sea necesario para responder a los
          usuarios y mantener registros de soporte.
        </li>
        <li>
          Los conjuntos de datos anonimizados, desidentificados o agregados pueden conservarse
          durante períodos más largos porque no están destinados a identificar a un usuario
          específico.
        </li>
        <li>
          Los registros anónimos de mensajes Reformulados pueden conservarse después de que se
          elimine su cuenta, como se describe a continuación.
        </li>
      </ul>
      <p>
        Puede eliminar su cuenta de Arcatext en cualquier momento desde dentro de la aplicación.
        Cuando elimina su cuenta, eliminamos su perfil e información de la cuenta, incluida su
        dirección de correo electrónico, nombre de usuario y credenciales de autenticación.
      </p>
      <p>
        Arcatext mantiene registros anónimos de mensajes Reformulados incluso después de que se
        elimine una cuenta. Esto permite que los usuarios se beneficien de su historial de mensajes
        si crean una cuenta de nuevo con el mismo identificador (es decir, una dirección de correo
        electrónico). Esto también ayuda a Arcatext a continuar entrenando sus propios modelos de IA
        internos con datos anónimos de mensajes Reformulados.
      </p>
      <p>
        Para mantener anónimos estos registros conservados, su dirección de correo electrónico se
        reemplaza en el momento de la eliminación por un identificador unidireccional e
        irreversible. Los mensajes Reformulados conservados no se almacenan con su dirección de
        correo electrónico y no pueden ser leídos ni vinculados de nuevo a usted por el personal de
        Arcatext. Si más tarde crea una nueva cuenta usando la misma dirección de correo
        electrónico, estos mensajes pueden reconectarse a su nueva cuenta.
      </p>
      <p>
        <span className="font-medium">Solicitar el borrado completo.</span> Si prefiere que sus
        datos de mensajes Reformulados conservados se borren de forma permanente y completa en lugar
        de conservarse en forma anónima, puede contactarnos en arcatextapp@gmail.com con el asunto
        "Data Erasure Request". Incluya la dirección de correo electrónico de la cuenta cuyos datos
        desea borrar. Este correo de solicitud debe enviarse desde el mismo correo electrónico
        asociado con la cuenta en cuestión. Las solicitudes de borrado de datos solo pueden
        realizarse para cuentas que ya han sido eliminadas. Borraremos los datos conservados
        asociados de acuerdo con la ley aplicable.
      </p>

      <h3 className="font-semibold text-secondary pt-2">10. Información Sensible</h3>
      <p>
        Arcatext es una herramienta de idiomas, no una bóveda segura. No debe enviar información
        altamente sensible para funciones de traducción, Reformulación, revisión o aprendizaje.
      </p>
      <p>Evite introducir:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Contraseñas</li>
        <li>Números de tarjeta de crédito</li>
        <li>Información bancaria</li>
        <li>Números de seguro social o documentos de identidad gubernamentales</li>
        <li>Registros médicos</li>
        <li>Secretos legales</li>
        <li>Direcciones privadas</li>
        <li>Información comercial confidencial</li>
        <li>
          Mensajes personales altamente sensibles que no desea que se procesen o almacenen para usos
          relacionados con el idioma
        </li>
      </ul>
      <p>
        Si elige enviar información sensible, entiende que puede ser procesada por Arcatext y sus
        proveedores de servicios para proporcionar la función solicitada.
      </p>

      <h3 className="font-semibold text-secondary pt-2">11. Privacidad de los Menores</h3>
      <p>Arcatext no está destinado a menores de 13 años.</p>
      <p>
        Si es menor de 13 años, no puede usar Arcatext a menos que su padre, tutor legal, escuela o
        institución educativa autorizada haya aprobado su uso de una manera permitida por la ley
        aplicable.
      </p>
      <p>
        Si Adalithic LLC tiene conocimiento de que se ha recopilado información personal de un menor
        de 13 años en violación de la ley aplicable, podemos tomar medidas diseñadas para restringir
        o eliminar esa información cuando corresponda.
      </p>

      <h3 className="font-semibold text-secondary pt-2">12. Transferencias Internacionales de Datos</h3>
      <p>
        Arcatext y sus proveedores de servicios pueden procesar información en los Estados Unidos u
        otros países. Estos países pueden tener leyes de privacidad que difieren de las leyes de su
        ubicación.
      </p>
      <p>
        Al usar Arcatext, usted entiende que su información puede procesarse en países fuera de su
        lugar de residencia. Información adicional sobre transferencias, incluidas las salvaguardas
        que utilizamos, aparece en la sección Derechos de Privacidad Específicos por Región más
        abajo.
      </p>

      <h3 className="font-semibold text-secondary pt-2">13. Sus Opciones</h3>
      <p>Usted tiene varias opciones respecto a su información.</p>
      <p className="font-medium">Permisos del Teclado y Ajustes de Acceso</p>
      <p>
        Puede deshabilitar los permisos del teclado, los permisos de internet o los ajustes de
        acceso relacionados a través de los ajustes de su dispositivo o sistema operativo. Algunas
        funciones de Arcatext que dependen del procesamiento en línea o de la integración del
        teclado pueden dejar de funcionar correctamente.
      </p>
      <p className="font-medium">Dejar de Usar el Teclado</p>
      <p>Puede eliminar Arcatext de su lista de teclados o desinstalar la aplicación en cualquier momento.</p>
      <p className="font-medium">Limitar Lo Que Envía</p>
      <p>
        Puede optar por no enviar texto sensible o personal para funciones de traducción,
        Reformulación, revisión o aprendizaje.
      </p>

      <h3 className="font-semibold text-secondary pt-2">14. Solicitudes de Privacidad</h3>
      <p>
        Si tiene preguntas sobre su información o esta Política de Privacidad, puede contactar a
        Adalithic LLC en:
      </p>
      <p>arcatextapp@gmail.com</p>
      <p>
        Adalithic LLC puede revisar y responder a las solicitudes de acuerdo con la ley aplicable y
        las capacidades operativas de la empresa.
      </p>

      <h3 className="font-semibold text-secondary pt-2">15. Aviso de Privacidad de California</h3>
      <p>
        Si es residente de California, esta sección proporciona información adicional.
      </p>
      <p>Arcatext puede procesar las siguientes categorías de información:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          <span className="font-medium">Contenido enviado por el usuario</span>: texto enviado para
          traducción, Reformulación, revisión o análisis. Finalidad: proporcionar funciones de
          idioma.
        </li>
        <li>
          <span className="font-medium">Mensajes Reformulados almacenados</span>: mensajes que usted
          Reformula que pueden vincularse a su perfil. Finalidad: proporcionar métricas, historial y
          funciones de aprendizaje.
        </li>
        <li>
          <span className="font-medium">Información de la cuenta</span>: dirección de correo
          electrónico, nombre de usuario, información de autenticación. Finalidad: proporcionar
          funciones basadas en cuenta.
        </li>
        <li>
          <span className="font-medium">Preferencias</span>: ajustes de idioma, alfabeto, tono,
          género y teclado. Finalidad: personalizar la aplicación.
        </li>
        <li>
          <span className="font-medium">Información técnica</span>: versión de la aplicación,
          registros de fallos, tipo de dispositivo, sistema operativo. Finalidad: mantener y mejorar
          la aplicación.
        </li>
        <li>
          <span className="font-medium">Información de soporte</span>: correos electrónicos o
          mensajes que nos envía. Finalidad: responder a solicitudes de soporte.
        </li>
        <li>
          <span className="font-medium">Datos de idioma desidentificados</span>: ejemplos de idioma
          anonimizados o agregados derivados de los envíos de los usuarios. Finalidad: mejorar los
          sistemas de idioma.
        </li>
      </ul>
      <p>Adalithic LLC no vende ni comparte su información personal.</p>
      <p>Si tiene preguntas sobre sus derechos de privacidad, contacte a arcatextapp@gmail.com.</p>

      <h3 className="font-semibold text-secondary pt-2">16. Seguridad</h3>
      <p>
        Utilizamos medidas técnicas y organizativas razonables para proteger la información
        procesada a través de Arcatext.
      </p>
      <p>
        Los mensajes Reformulados vinculados al perfil se tratan como datos confidenciales del
        usuario. Tomamos medidas diseñadas para restringir el acceso a esta información al personal
        autorizado y a los proveedores de servicios que necesitan acceso para operar, proteger,
        mejorar o dar soporte a Arcatext.
      </p>
      <p>
        Sin embargo, ningún método de almacenamiento electrónico o transmisión por internet es
        completamente seguro. No podemos garantizar la seguridad absoluta.
      </p>
      <p>Usted es responsable de decidir qué información envía a través de Arcatext.</p>

      <h3 className="font-semibold text-secondary pt-2">17. Compartición de Datos</h3>
      <p>Arcatext y Adalithic LLC pueden compartir información en circunstancias limitadas:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Con proveedores de IA para proporcionar funciones de traducción, Reformulación, revisión e idioma</li>
        <li>Con proveedores de servicios que ayudan a operar, proteger, almacenar, analizar o mejorar la aplicación</li>
        <li>Con proveedores de análisis o de informes de fallos</li>
        <li>Con procesadores de pagos o proveedores de tiendas de aplicaciones</li>
        <li>Si lo exige la ley o un proceso legal</li>
        <li>Para proteger los derechos, la seguridad o la protección de Arcatext, los usuarios, Adalithic LLC u otros</li>
        <li>En relación con fusiones, adquisiciones, financiación o ventas de activos</li>
      </ul>
      <p>No vendemos sus datos.</p>

      <h3 className="font-semibold text-secondary pt-2">
        18. Tienda de Aplicaciones, Facturación e Información de Pago
      </h3>
      <p>
        Si Arcatext ofrece funciones de pago, suscripciones o compras dentro de la aplicación, el
        procesamiento de pagos puede ser gestionado por proveedores de plataforma de terceros como
        Apple, Google u otros procesadores de pagos autorizados.
      </p>
      <p>Por ejemplo:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Las compras en plataformas Apple pueden procesarse a través de los sistemas App Store y StoreKit de Apple.</li>
        <li>Las compras en plataformas Android pueden procesarse a través de Google Play Billing y los sistemas de pago de Google.</li>
      </ul>
      <p>
        Arcatext y Adalithic LLC no reciben ni almacenan directamente la información completa de la
        tarjeta de pago utilizada a través de estos sistemas de facturación de plataforma.
      </p>
      <p>
        Su uso de tiendas de aplicaciones, sistemas de facturación y proveedores de pago de terceros
        también puede regirse por las propias políticas de privacidad, términos y reglas de pago de
        dichos proveedores.
      </p>

      <h3 className="font-semibold text-secondary pt-2">19. Cambios a Esta Política de Privacidad</h3>
      <p>
        Podemos actualizar esta Política de Privacidad de vez en cuando para reflejar cambios en
        nuestra aplicación, tecnología, proveedores de servicios, obligaciones legales o prácticas
        comerciales.
      </p>
      <p>Cuando actualicemos la política, revisaremos la fecha de "Última actualización" en la parte superior.</p>
      <p>
        Si los cambios son significativos, podemos proporcionar un aviso adicional a través de la
        aplicación, el sitio web u otros métodos apropiados.
      </p>

      <h3 className="font-semibold text-secondary pt-2">20. Contáctenos</h3>
      <p>Si tiene preguntas, inquietudes o solicitudes de privacidad, contacte:</p>
      <p>
        Adalithic LLC
        <br />
        Contacto de Privacidad de Arcatext
        <br />
        Correo electrónico: arcatextapp@gmail.com
        <br />
        Página de soporte: https://adalithic.com/
      </p>

      <h3 className="font-semibold text-secondary pt-2">Derechos de Privacidad Específicos por Región</h3>
      <p>
        Si existe algún conflicto entre esta Política de Privacidad y los Términos de Uso en asuntos
        relacionados con la privacidad, prevalece esta Política de Privacidad.
      </p>
      <p className="font-medium">Sus Derechos (Resumen Global)</p>
      <p>
        Dependiendo de dónde viva, puede tener derechos respecto a su información personal, incluido
        el derecho a acceder, corregir, eliminar o restringir el procesamiento de sus datos, el
        derecho a la portabilidad de datos, el derecho a oponerse a cierto procesamiento y el
        derecho a retirar el consentimiento cuando el procesamiento se base en el consentimiento.
        Los derechos detallados y cómo ejercerlos se establecen en las secciones específicas por
        región más abajo. También puede contactarnos en arcatextapp@gmail.com para hacer una
        solicitud, y responderemos de acuerdo con la ley aplicable.
      </p>

      <p className="font-medium">
        Anexo A — Espacio Económico Europeo (EEA), Unión Europea y Países de la EFTA
      </p>
      <p>
        Este Anexo se aplica a los consumidores residentes en: Austria, Bélgica, Bulgaria, Croacia,
        Chipre, República Checa, Dinamarca, Estonia, Finlandia, Francia, Alemania, Grecia, Hungría,
        Irlanda, Italia, Letonia, Lituania, Luxemburgo, Malta, Países Bajos, Polonia, Portugal,
        Rumanía, Eslovaquia, Eslovenia, España, Suecia, Islandia y Noruega.
      </p>
      <p className="font-medium">Bases legales para el procesamiento</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          <span className="font-medium">Ejecución de un contrato</span>: procesamiento necesario
          para proporcionar las funciones principales de teclado, traducción, Reformulación e idioma
          que usted solicita.
        </li>
        <li>
          <span className="font-medium">Intereses legítimos</span>: seguridad, prevención de abusos,
          mejora del servicio y desarrollo de sistemas de idioma. Hemos realizado una prueba de
          ponderación y concluido que estos intereses no son anulados por sus derechos y libertades
          en la mayoría de los casos.
        </li>
        <li>
          <span className="font-medium">Consentimiento</span>: funciones opcionales como el
          almacenamiento de mensajes Reformulados para el aprendizaje y el seguimiento del progreso.
          Puede retirar el consentimiento en cualquier momento desactivando la función en la
          aplicación.
        </li>
      </ul>
      <p className="font-medium">Sus derechos</p>
      <p>
        Sujeto a las excepciones aplicables, usted tiene derecho a acceder a sus datos personales;
        obtener la rectificación de datos inexactos; obtener el borrado de sus datos ("derecho al
        olvido"); obtener la restricción del procesamiento; recibir sus datos en un formato
        portátil; oponerse al procesamiento basado en intereses legítimos; y retirar el
        consentimiento cuando el procesamiento se base en el consentimiento. Puede ejercer estos
        derechos contactándonos en arcatextapp@gmail.com. Responderemos dentro de los plazos
        exigidos por la ley (generalmente un mes, prorrogable en casos complejos).
      </p>
      <p className="font-medium">Derecho a reclamar</p>
      <p>
        Tiene derecho a presentar una reclamación ante su autoridad de control local (autoridad de
        protección de datos) si cree que sus derechos han sido violados.
      </p>
      <p className="font-medium">Representante</p>
      <p>
        Adalithic LLC ha designado un representante en la Unión Europea conforme al Artículo 27 del
        GDPR. Nuestro representante es Prighter Group. Puede contactar a nuestro representante, o
        ejercer sus derechos como interesado a través de él, utilizando el siguiente portal seguro:{" "}
        <a
          href="https://app.prighter.com/portal/17012077629"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline"
        >
          https://app.prighter.com/portal/17012077629
        </a>
        .
      </p>
      <p className="font-medium">Transferencias internacionales de datos</p>
      <p>
        Su información puede transferirse a los Estados Unidos y otros países fuera del EEA/EFTA. Nos
        basamos en las Cláusulas Contractuales Estándar (SCC) aprobadas por la Comisión Europea como
        el mecanismo de transferencia principal, junto con medidas complementarias apropiadas (como
        el cifrado y los controles de acceso) cuando se requiera.
      </p>
      <p className="font-medium">Retención y procesamiento automatizado</p>
      <p>
        Los períodos de retención se describen en la Sección 9. El procesamiento automatizado y la
        mejora de los modelos de lenguaje sobre el texto enviado por el usuario se basan en
        intereses legítimos o en el consentimiento (cuando corresponda) y están sujetos a las
        salvaguardas descritas en esta Política.
      </p>

      <p className="font-medium">Anexo B — Reino Unido</p>
      <p>
        Este Anexo se aplica a los consumidores residentes en el Reino Unido. Las disposiciones del
        Anexo A se aplican con las siguientes adaptaciones:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Las referencias al GDPR se reemplazan con el UK GDPR.</li>
        <li>La autoridad de control es la Information Commissioner's Office (ICO).</li>
        <li>
          Adalithic LLC ha designado un representante en el Reino Unido conforme al Artículo 27 del
          UK GDPR. Nuestro representante en el Reino Unido es Prighter Group, con quien se puede
          contactar a través del mismo portal seguro:{" "}
          <a
            href="https://app.prighter.com/portal/17012077629"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline"
          >
            https://app.prighter.com/portal/17012077629
          </a>
          .
        </li>
      </ul>

      <p className="font-medium">Anexo C — Suiza</p>
      <p>
        Este Anexo se aplica a los consumidores residentes en Suiza. Usted tiene derechos conforme a
        la revisada Ley Federal de Protección de Datos (nFADP), incluidos los derechos de acceso,
        rectificación y borrado. Puede ejercer estos derechos contactándonos en
        arcatextapp@gmail.com. Adalithic LLC ha designado un representante en Suiza conforme a la
        revisada Ley Federal de Protección de Datos. Nuestro representante suizo es Prighter Group,
        con quien se puede contactar a través del mismo portal seguro:{" "}
        <a
          href="https://app.prighter.com/portal/17012077629"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline"
        >
          https://app.prighter.com/portal/17012077629
        </a>
        .
      </p>

      <p className="font-medium">Anexo D — Canadá, incluido Quebec</p>
      <p>
        Este Anexo se aplica a los consumidores residentes en Canadá, incluido Quebec. Usted tiene
        derechos conforme a PIPEDA y a la Law 25 de Quebec para acceder y corregir su información
        personal y para retirar el consentimiento a cierto procesamiento. Puede ejercer estos
        derechos contactándonos en arcatextapp@gmail.com. Se proporciona una versión en francés de
        esta Política de Privacidad para los residentes de Quebec. En caso de una violación de datos
        que suponga un riesgo real de daño significativo, notificaremos a las personas afectadas y a
        las autoridades pertinentes según lo exija la ley aplicable.
      </p>

      <p className="font-medium">Anexo E — Estados Unidos</p>
      <p>
        Este Anexo se aplica a los consumidores residentes en los Estados Unidos. Los residentes de
        California tienen los derechos descritos en el Aviso de Privacidad de California en la
        Sección 15 anterior, incluidos los derechos a conocer, eliminar y corregir la información
        personal y a optar por no participar en cualquier venta o compartición. Adalithic LLC no
        vende ni comparte su información personal para publicidad conductual entre contextos, y usted
        no será discriminado por ejercer sus derechos. Otras leyes de privacidad estatales de EE.
        UU. pueden aplicarse según su estado de residencia, y respetaremos los derechos aplicables
        cuando se requiera. Para ejercer estos derechos, contáctenos en arcatextapp@gmail.com.
      </p>

      <p className="font-medium">Anexo F — Otros Países y Regiones</p>
      <p>
        Este Anexo se aplica a los consumidores residentes en todos los demás países y regiones
        donde se ofrece Arcatext (excluyendo las jurisdicciones sancionadas o bajo embargo). Cuando
        la ley local le otorgue derechos de privacidad adicionales e irrenunciables (por ejemplo,
        conforme a leyes como la LGPD de Brasil o las leyes de privacidad de Japón, Corea del Sur,
        Australia, India y otras jurisdicciones), esos derechos se aplican. Puede contactarnos en
        arcatextapp@gmail.com para ejercer tales derechos, y responderemos de acuerdo con la ley
        local aplicable.
      </p>
    </div>
  );
}
