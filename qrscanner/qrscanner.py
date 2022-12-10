from pyzbar.pyzbar import decode
import numpy as np
import cv2 as cv
import time
import requests
import json
from playsound import playsound
import urllib

proxy = {
    'http' : 'http://192.168.100.7:4000'
}

def check_qr(qr_data):
    base_url = 'http://localhost:4000/api/scan'
    r = requests.post(base_url,json=json.loads(qr_data))

    if json.loads(r.text)["message"] == 'ok':
    	playsound('in.mp3')
    else:
        playsound('out.mp3')

    print(json.loads(r.text)["message"])

def main():
    cap = cv.VideoCapture(0)
    cap.set(3,640)
    cap.set(4,480)

    if not cap.isOpened():
        print("Cannot open camera")
        exit()
    while True:
        # Capture frame-by-frame
        ret, frame = cap.read()
        cv.normalize(frame, frame, 0, 255, cv.NORM_MINMAX)
        # frame = cv.cvtColor(frame, cv.COLOR_BGR2HSV)
        # contrast = 1.25
        # brightness = 50
        # frame[:,:,2] = np.clip(contrast * frame[:,:,2] + brightness, 0, 255)
        # frame = cv.cvtColor(frame, cv.COLOR_HSV2BGR)

        # if frame is read correctly ret is True
        if not ret:
            print("Can't receive frame (stream end?). Exiting ...")
            break
        
        for barcode in decode(frame):
            myData = barcode.data.decode('utf-8')
            
            if myData:
                check_qr(myData)
                time.sleep(1)
                cap.open(0) #Reinitialization of Camera so it wont repeat


            # HIGHLIGHTS QR CODE. FOR TESTING PURPOSES ONLY
            pts = np.array([barcode.polygon],np.int32)
            pts = pts.reshape((-1,1,2))
            cv.polylines(frame,[pts],True,(255,0,255),5)



        img_gray = cv.cvtColor(frame, cv.COLOR_BGR2GRAY)

        # Display the resulting frame
        cv.imshow('Scanner', img_gray)

        if cv.waitKey(1) == ord('q'):
            break
    # When everything done, release the capture
    cap.release()
    cv.destroyAllWindows()

if __name__ == "__main__":
    main()
