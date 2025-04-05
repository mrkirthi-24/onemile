LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'formatters': {
        'standard': {
            'format': '%(asctime)s - %(name)s - %(levelname)s - %(message)s',
        },
    },
    'handlers': {
        'console': {
            'level': 'INFO',
            'filters': [],
            'formatter': 'standard',
            'class': 'logging.StreamHandler',
        },
    },
    'loggers': {
        logger_name: {
            'level': 'WARNING',
            'propagate': True,
        } for logger_name in
        ('django', 'django.request', 'django.db.backends', 'django.template', 'core', 'urllib3', 'asyncio')
    },
    'root': {
        'level': 'DEBUG',
        'handlers': ['console'],
    }
}
