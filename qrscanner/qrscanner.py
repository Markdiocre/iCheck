from pyzbar.pyzbar import decode
import numpy as np
import cv2 as cv
import time
import requests
import json

def check_qr(qr_data):
    base_url = 'http://localhost:3000/scan'
    r = requests.post(base_url,json=json.loads(qr_data))
    print(r.text)
    
    


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
            # pts = np.array([barcode.polygon],np.int32)
            # pts = pts.reshape((-1,1,2))
            # cv.polylines(frame,[pts],True,(255,0,255),5)



        # Display the resulting frame
        cv.imshow('Scanner', frame)
        if cv.waitKey(1) == ord('q'):
            break
    # When everything done, release the capture
    cap.release()
    cv.destroyAllWindows()

if __name__ == "__main__":
    main()