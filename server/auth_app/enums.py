from django.db import models


class ReferralEnums(models.TextChoices):
    """
    Enum for reference types.
    """
    Google = "Google"
    Twitter = "Twitter"
    Facebook = "Facebook"
    WhatsApp = "WhatsApp"
    Instagram = "Instagram"
    Other = "Other"
