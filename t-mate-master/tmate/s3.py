import boto
from boto.s3.key import Key
from boto.s3.connection import OrdinaryCallingFormat
from django.conf import settings

def s3_upload(uploaded_file, id):
    s3conn = boto.connect_s3(settings.AWS_ACCESS_KEY,
            settings.AWS_SECRET_ACCESS_KEY)
    bucket = s3conn.get_bucket(settings.S3_BUCKET)

    k = Key(bucket)
    k.key = 'id-' + str(id)
    k.content_type = uploaded_file.content_type

    if hasattr(uploaded_file,'temporary_file_path'):
        k.set_contents_from_filename(uploaded_file.temporary_file_path())
    else:
        k.set_contents_from_string(uploaded_file.read())

    k.set_canned_acl('public-read')

    return k.generate_url(expires_in=0, query_auth=False)

def s3_delete(id):
    s3conn = boto.connect_s3(settings.AWS_ACCESS_KEY,
            settings.AWS_SECRET_ACCESS_KEY)
    bucket = s3conn.get_bucket(settings.S3_BUCKET)

    k = Key(bucket)
    k.key = 'id-' + str(id)
    k.delete()

